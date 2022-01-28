import {Component, OnInit} from '@angular/core';
import {LotteryService} from "../../services/lottery.service";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  constructor(public lotteryService: LotteryService) {
  }

  ngOnInit(): void {
  }

  async handlePlay(): Promise<any> {
    await this.lotteryService.handlePlay();
  }
}
