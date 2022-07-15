import { keyStores, Near, WalletConnection, utils, Contract } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
const gas = new BN(process.env.VUE_APP_gas);

export const near = new Near({
  networkId: process.env.VUE_APP_networkId,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: process.env.VUE_APP_nodeUrl,
  walletUrl: process.env.VUE_APP_walletUrl,
});

export const wallet = new WalletConnection(near, "NCD.L2.sample--lottery");

function getLotteryContract() {
  return new Contract(
    wallet.account(), // the account object that is connecting
    localStorage.getItem('CONTRACT_ID'), // name of contract you're connecting to
    {
      viewMethods: ['get_owner', 'get_winner', 'get_pot', 'get_fee', 'get_fee_strategy', 'get_has_played',
        'get_last_played', 'get_active', 'explain_fees', 'explain_lottery'], // view methods do not change state but usually return a value
      changeMethods: ['play', 'configureLottery', 'configureFee', 'reset'] // change methods modify state
    }
  )
}

const contract = getLotteryContract()

// --------------------------------------------------------------------------
// functions to call contract Public VIEW methods
// --------------------------------------------------------------------------

//function to get owner  of the  contract
export const getOwner = async () => {
  return await contract.get_owner();
};

//function to get winner  of the  contract,  if  exists
export const getWinner = async () => {
  return await contract.get_winner();
};

//function to get current amount  of  pot  (in  NEAR)
export const getPot = async () => {
  return await contract.get_pot();
};

//function to get current amount  of  fee  (in  NEAR)
export const getFee = async () => {
  return await contract.get_fee();
};

//function to get current strategy  of  fee
export const getFeeStrategy = async () => {
  return await contract.get_fee_strategy();
};

//function to get bool value  has  lottery played or  no by  player
export const getHasPlayed = async (accountId) => {
  return await contract.get_has_played({ player: accountId });
};

//function to get id of last player account 
export const getLastPlayed = async () => {
  return await contract.get_last_played();
};

//function to get flag  is lottery active  or no
export const getActive = async () => {
  return await contract.get_active();
};

//function to get string  explanation of current fees
export const getExplainFees = async () => {
  return await contract.explain_fees();
};

//function to get string  explanation of current lottery  info
export const getExplainLottery = async () => {
  return await contract.explain_lottery();
};

// --------------------------------------------------------------------------
// functions to call contract Public CHANGE methods
// --------------------------------------------------------------------------

//function to play lottery
export const play = async (fee, hasPlayed) => {
  let response
  let feeNumber = fee.match(/(\d+)/)[0] //* 1000000000000000000000000
  if (hasPlayed) {
    response = await contract.play(
      {},
      gas,
      utils.format.parseNearAmount(feeNumber)
    )
  } else {
    response = await contract.play(
      {},
      gas
    )
  }
  console.log(response)
}

//function to configure Lottery
export const configureLottery = async (chance) => {
  return await contract.configure_lottery(
    { chance: chance },
    gas
  )
}

//function to configure Fee
export const configureFee = async (strategy) => {
  return contract.configure_fee(
    { strategy: strategy },
    gas
  )
}

//function to reset  lottery
export const reset = async () => {
  let response = await contract.reset(
    { accountId: CONTRACT_ID },
    gas
  )
  console.log(response)
}