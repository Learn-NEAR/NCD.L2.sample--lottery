import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {LotteryService} from "../../../services/lottery.service";

@Component({
  selector: 'app-change-contract-mobile',
  templateUrl: './change-contract-mobile.component.html',
  styleUrls: ['./change-contract-mobile.component.scss']
})
export class ChangeContractMobileComponent implements OnInit {
  public defaultContractId = environment.NG_APP_CONTRACT_ID;
  public contractId = localStorage.getItem('CONTRACT_ID');
  public isChangeContractIdFormOpened = false;
  public inputContractId = localStorage.getItem('CONTRACT_ID');

  constructor(public lotteryService: LotteryService) {
    !this.contractId && localStorage.setItem('CONTRACT_ID', this.defaultContractId);
    this.contractId = this.contractId ?? this.defaultContractId;
  }

  ngOnInit(): void {
  }

  handleSetContractId = (Id: any) => {
    localStorage.setItem('CONTRACT_ID', Id);
    this.contractId = localStorage.getItem('CONTRACT_ID');
    location.reload()
  };

  handleSetDefaultContractId = () => {
    localStorage.setItem('CONTRACT_ID', this.defaultContractId);
    this.contractId = localStorage.getItem('CONTRACT_ID');
    this.inputContractId = localStorage.getItem('CONTRACT_ID');
    location.reload()
  };
}
