import { Injectable } from '@angular/core';
import { keyStores, Near, WalletConnection,  utils } from "near-api-js";
import {environment} from "../../environments/environment";

// @ts-ignore
import BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public CONTRACT_ID = environment.NG_APP_CONTRACT_ID;
  public gas = new BN(environment.NG_APP_gas);
  public near = new Near({
    networkId: environment.NG_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NG_APP_nodeUrl,
    walletUrl: environment.NG_APP_walletUrl,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "lottery");

  constructor() { }

// --------------------------------------------------------------------------
// functions to call contract Public VIEW methods
// --------------------------------------------------------------------------

//function to get owner  of the  contract
  getOwner = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_owner");
  };

//function to get winner  of the  contract,  if  exists
  getWinner = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_winner");
  };

//function to get current amount  of  pot  (in  NEAR)
  getPot = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_pot");
  };

//function to get current amount  of  fee  (in  NEAR)
  getFee = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_fee");
  };

//function to get current strategy  of  fee
  getFeeStrategy = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_fee_strategy");
  };

//function to get bool value  has  lottery played or  no by  player
  getHasPlayed = ( accountId: any ) => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_has_played", {player: accountId});
  };

//function to get id of last player account
  getLastPlayed = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_last_played");
  };

//function to get flag  is lottery active  or no
  getActive = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "get_active");
  };

//function to get string  explanation of current fees
  getExplainFees = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "explain_fees");
  };

  //function to get string  explanation of current lottery  info
  getExplainLottery = () => {
    return this.wallet.account().viewFunction(localStorage.getItem('CONTRACT_ID') ?? "", "explain_lottery");
  };

// --------------------------------------------------------------------------
// functions to call contract Public CHANGE methods
// --------------------------------------------------------------------------

  //function to play lottery
  play = async (fee: any,hasPlayed: any) => {
    let response
    let feeNumber = fee.match(/(\d+)/)[0] //* 1000000000000000000000000
    console.log(feeNumber)
    if (hasPlayed) {
      console.log(utils.format.parseNearAmount(feeNumber))
      const attachedDeposit: string = utils.format.parseNearAmount(feeNumber) ?? "";
      const attachedDepositBN = new BN(attachedDeposit);

      response = await this.wallet.account().functionCall({
        contractId: localStorage.getItem('CONTRACT_ID') ?? "",
        methodName: "play",
        gas: this.gas,
        attachedDeposit: attachedDepositBN,
        args: {}
      })
    }else{
      response = await this.wallet.account().functionCall({
        contractId: localStorage.getItem('CONTRACT_ID') ?? "",
        methodName: "play",
        gas: this.gas,
        args: {}
      })
    }
    console.log(response)
  }

  //function to configure Lottery
  configureLottery = ({chance}: {chance: any}) => {
    return this.wallet.account().functionCall({
      contractId: localStorage.getItem('CONTRACT_ID') ?? "",
      methodName: "configure_lottery",
      args: {chance}
    })
  }

  //function to configure Fee
  configureFee = ({strategy}: {strategy: any}) => {
    return this.wallet.account().functionCall({
      contractId: localStorage.getItem('CONTRACT_ID') ?? "",
      methodName: "configure_fee",
      args: {strategy}
    })
  }

  //function to reset  lottery
  reset = () => {
    let  response =  this.wallet.account().functionCall({
      contractId: localStorage.getItem('CONTRACT_ID') ?? "",
      methodName: "reset",
      args: { accountId:this.CONTRACT_ID }
    })
    console.log(response)
  }
}
