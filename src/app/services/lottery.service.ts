import {Injectable} from '@angular/core';
import {NearService} from "./near.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  public FeeStrategies = ['Free', 'Constant', 'Linear', 'Exponential']
  public owner = '';
  public winner = ''
  public pot = ''
  public fee = ''
  public feeStrategy = ''
  public hasPlayed: any = null;
  public lastPlayed = null;
  public active = null;
  public feesExplanation = '';
  public lotteryExplanation = '';
  public apiError: null | any = null;
  public accountId = '';

  constructor(public nearService: NearService, private route: ActivatedRoute) {
    this.updateValues();
  }

  updateValues = async () => {
    try {
      this.owner = await this.nearService.getOwner()
      this.winner = await this.nearService.getWinner()
      this.pot = await this.nearService.getPot()
      this.fee = await this.nearService.getFee()
      this.feeStrategy = this.FeeStrategies[await this.nearService.getFeeStrategy()]
      this.hasPlayed = this.nearService.wallet.getAccountId() && await this.nearService.getHasPlayed(this.nearService.wallet.getAccountId())
      this.lastPlayed = await this.nearService.getLastPlayed()
      this.active = await this.nearService.getActive()
      this.feesExplanation = await this.nearService.getExplainFees()
      this.lotteryExplanation = await this.nearService.getExplainLottery()

      this.route.queryParams.subscribe((params: any) => {
        this.accountId = params['account_id'] ?? '';
      });
    } catch (e) {
      this.apiError = e;
      console.log(this.apiError);
    }
  }

  handlePlay = async () => {
    this.fee = await this.nearService.getFee()
    this.hasPlayed = await this.nearService.getHasPlayed(this.nearService.wallet.getAccountId())
    await this.nearService.play(this.fee, this.hasPlayed);

    if(!this.hasPlayed) {
      this.hasPlayed = true;
      this.fee = await this.nearService.getFee();
      this.winner = await this.nearService.getWinner();
    }
  };

  handleReset = async () => {
    this.nearService.reset();
  };

  handleSignIn = () => {
    this.nearService.wallet.requestSignIn({
      contractId: this.nearService.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut = () => {
    this.nearService.wallet.signOut()
    this.accountId = this.nearService.wallet.getAccountId()
  };
}
