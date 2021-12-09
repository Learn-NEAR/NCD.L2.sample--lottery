import BN from 'bn.js';
import { keyStores, Near, WalletConnection, utils } from 'near-api-js';

const gas = new BN('70000000000000');

export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = new WalletConnection(near, 'lottery');

// -----------------------------------------------------------------------------------
// view functions
// -----------------------------------------------------------------------------------

//function to get owner  of the  contract
export const getOwner = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_owner');
};

//function to get winner  of the  contract,  if  exists
export const getWinner = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_winner');
};

//function to get current amount  of  pot  (in  NEAR)
export const getPot = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_pot');
};

//function to get current amount  of  fee  (in  NEAR)
export const getFee = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_fee');
};

//function to get current strategy  of  fee
export const getFeeStrategy = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_fee_strategy');
};

//function to get bool value  has  lottery played or  no
export const getHasPlayed = (accountId) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_has_played', { player: accountId });
};

//function to get id of last player account
export const getLastPlayed = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_last_played');
};

//function to get flag  is lottery active  or no
export const getActive = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'get_active');
};

//function to get string  explanation of current fees
export const getExplainFees = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'explain_fees');
};

//function to get string  explanation of current lottery  info
export const getExplainLottery = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().viewFunction(CONTRACT_ID, 'explain_lottery');
};

// -----------------------------------------------------------------------------------
// change functions
// -----------------------------------------------------------------------------------

//function to play lottery
export const play = (fee, hasPlayed) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  let response;
  let feeNumber = fee.match(/(\d+)/)[0]; //* 1000000000000000000000000
  console.log(feeNumber);
  if (hasPlayed) {
    console.log(utils.format.parseNearAmount(feeNumber));
    response = wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: 'play',
      gas,
      attachedDeposit: utils.format.parseNearAmount(feeNumber),
    });
  } else {
    response = wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: 'play',
      gas,
    });
  }
  console.log(response);
};

// -----------------------------------------------------------------------------------
// Admin functions
// -----------------------------------------------------------------------------------

//function to configure Lottery
export const configureLottery = ({ chance }) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  console.log(typeof chance);
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'configure_lottery',
    args: { chance },
  });
};

//function to configure Fee
export const configureFee = ({ strategy }) => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'configure_fee',
    args: { strategy },
  });
};

//function to reset  lottery
export const reset = () => {
  const CONTRACT_ID = localStorage.getItem('CONTRACT_ID');
  let response = wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'reset',
    args: { accountId: CONTRACT_ID },
  });
  console.log(response);
};
