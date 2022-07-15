import { ref, onMounted } from "vue";
import {
  wallet,
  CONTRACT_ID,
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
  reset
} from "../services/near";

//this is the same array as at contract side, it used to display not a number of strategy, but a text
const FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential']

export const useLottery = () => {
  const owner = ref("")
  const winner = ref('')
  const pot = ref('')
  const fee = ref('')
  const feeStrategy = ref('')
  const hasPlayed = ref(null)
  const lastPlayed = ref(null)
  const active = ref(null)
  const feesExplanation = ref('')
  const lotteryExplanation = ref('')
  const apiError = ref(null);

  const updateValues = async () => {
    try {
      owner.value = await getOwner()
      winner.value = await getWinner()
      pot.value = await getPot()
      fee.value = await getFee()
      feeStrategy.value = FeeStrategies[await getFeeStrategy()]
      hasPlayed.value = wallet.getAccountId() && await getHasPlayed(wallet.getAccountId())
      lastPlayed.value = await getLastPlayed()
      active.value = await getActive()
      feesExplanation.value = await getExplainFees()
      lotteryExplanation.value = await getExplainLottery()
    } catch (e) {
      apiError.value = e;
      console.log(apiError.value);
    }
  }

  const handlePlay = async () => {
    console.log('inside')
    fee.value = await getFee()
    hasPlayed.value = await getHasPlayed(wallet.getAccountId())
    await play(fee.value, hasPlayed.value);
  };

  const handleGetOwner = async () => {
    return await getOwner()
  }

  const handleGetWinner = async () => {
    return await getWinner()
  }

  const handleGetPot = async () => {
    return await getPot()
  }

  const handleGetFee = async () => {
    return await getFee()
  }

  const handleGetFeeStrategy = async () => {
    return FeeStrategies[await getFeeStrategy()]
  }

  const handleGetHasPlayed = async (accountId) => {
    return await getHasPlayed(accountId)
  }

  const handleGetLastPlayed = async () => {
    return await getLastPlayed(wallet.getAccountId())
  }

  const handleGetActive = async () => {
    return await getActive()
  }

  const handleGetExplainFees = async () => {
    return await getExplainFees()
  }

  const handleGetExplainLottery = async () => {
    return await getExplainLottery()
  }

  const handleReset = async () => {
    reset();
  };

  return {
    owner,
    getOwner: handleGetOwner,
    getWinner: handleGetWinner,
    getPot: handleGetPot,
    getFee: handleGetFee,
    getFeeStrategy: handleGetFeeStrategy,
    getHasPlayed: handleGetHasPlayed,
    getLastPlayed: handleGetLastPlayed,
    getActive: handleGetActive,
    getExplainFees: handleGetExplainFees,
    getExplainLottery: handleGetExplainLottery,
    winner,
    pot,
    fee,
    feeStrategy,
    hasPlayed,
    lastPlayed,
    active,
    feesExplanation,
    lotteryExplanation,
    apiError,
    play: handlePlay,
    reset: handleReset,
    update: updateValues
  };
};

export const useWallet = () => {
  const accountId = ref('')
  accountId.value = wallet.getAccountId()
  const err = ref(null)

  onMounted(async () => {
    try {
      accountId.value = wallet.getAccountId()
    } catch (e) {
      err.value = e;
      console.error(err.value);
    }
  });

  const handleSignIn = () => {
    wallet.requestSignIn({
      contractId: CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  const handleSignOut = () => {
    wallet.signOut()
    accountId.value = wallet.getAccountId()
  };

  return {
    accountId,
    signIn: handleSignIn,
    signOut: handleSignOut
  }
}