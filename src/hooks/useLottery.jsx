import { wallet } from '../services/near';
import { useState, useCallback, useEffect } from 'react';
import {
  getOwner,
  getWinner,
  getPot,
  getFee,
  getFeeStrategy,
  getHasPlayed,
  getLastPlayed,
  getActive,
  getExplainFees,
  getExplainLottery,
  play,
  reset,
} from '../services/near';

const FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential'];
const accountId = wallet.getAccountId();

export const useLottery = ({ contractId, setApiError }) => {
  const [owner, setOwner] = useState('');
  const [winner, setWinner] = useState('');
  const [pot, setPot] = useState('');
  const [fee, setFee] = useState('');
  const [feeStrategy, setFeeStrategy] = useState('');
  const [hasPlayed, setHasPlayed] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);
  const [active, setActive] = useState(null);
  const [feesExplanation, setFeesExplanation] = useState('');
  const [lotteryExplanation, setLotteryExplanation] = useState('');

  const updateValues = useCallback(async () => {
    try {
      setOwner(await getOwner());
      setWinner(await getWinner());
      setPot(await getPot());
      setFee(await getFee());
      setFeeStrategy(FeeStrategies[await getFeeStrategy()]);
      setHasPlayed(await getHasPlayed(accountId));
      setLastPlayed(await getLastPlayed());
      setActive(await getActive());
      setFeesExplanation(await getExplainFees());
      setLotteryExplanation(await getExplainLottery());
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId]);

  useEffect(() => {
    try {
      updateValues();
    } catch (err) {
      setApiError(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateValues]);

  const handlePlay = async () => {
    await play(fee, hasPlayed);
    setFee(await getFee());
    setHasPlayed(await getHasPlayed(accountId));
    setWinner(await getWinner());
  };

  const handleReset = async () => {
    reset();
  };

  return {
    owner,
    winner,
    pot,
    fee,
    feeStrategy,
    hasPlayed,
    lastPlayed,
    active,
    feesExplanation,
    lotteryExplanation,
    play: handlePlay,
    reset: handleReset,
  };
};
