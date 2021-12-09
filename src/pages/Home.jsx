import React, { useState } from 'react';
import { wallet } from '../services/near';
import { Footer } from '../components/Footer';
import { useLottery } from '../hooks/useLottery';
import { Navigation } from '../components/Navigation';
import { InfoLottery } from '../components/InfoLottery';
import { useContract } from '../context/ContractProvider';
import { PlayComponent } from '../components/PlayComponent';
import { DecorationDots } from '../components/decoration/DecorationDots';
import { DecorationLines } from '../components/decoration/DecorationLines';
import { DecorationCircleLg } from '../components/decoration/DecorationCircleLg';
import { DecorationCircleMd } from '../components/decoration/DecorationCircleMd';
import { DecorationCircleSm } from '../components/decoration/DecorationCircleSm';

export const Home = () => {
  const { contractId } = useContract();

  const [apiError, setApiError] = useState('');

  const { owner, winner, pot, fee, feeStrategy, hasPlayed, lotteryExplanation, play, reset } = useLottery({
    contractId,
    apiError,
    setApiError,
  });

  const [accountId, setAccountId] = useState(wallet.getAccountId() ?? '');

  const chance = lotteryExplanation === '' ? lotteryExplanation : lotteryExplanation.match(/(\d+)/)[0] + '%';

  return (
    <>
      <DecorationDots />
      <DecorationLines />
      <DecorationCircleLg />
      <DecorationCircleMd />
      <DecorationCircleSm />

      <Navigation accountId={accountId} setAccountId={setAccountId} apiError={apiError} setApiError={setApiError} />

      <div className="w-full mt-9 px-5 md:px-9">
        <div className="w-full xl:w-1/2 mx-auto bg-white rounded-md shadow-2xl py-6">
          <h2 className="text-center font-medium text-gray-800 text-3xl mx-4">
            This page was created not for the game just for testing
          </h2>
        </div>
      </div>
      <div className="w-full sm:block md:block lg:flex xl:flex px-5 mt-9 md:px-9">
        <InfoLottery chance={chance} owner={owner} winner={winner} fee={fee} pot={pot} fee_strategy={feeStrategy} />
        <PlayComponent
          accountId={accountId}
          owner={owner}
          contractId={contractId}
          fee={fee}
          has_played={hasPlayed}
          play={play}
          reset={reset}
          setApiError={setApiError}
        />
      </div>

      <Footer />
    </>
  );
};
