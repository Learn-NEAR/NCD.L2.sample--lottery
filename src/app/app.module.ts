import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeContractComponent } from './components/navigation/change-contract/change-contract.component';
import { ChangeContractMobileComponent } from './components/navigation/change-contract-mobile/change-contract-mobile.component';
import { FormsModule } from "@angular/forms";
import { DecorationCircleLgComponent } from './components/decoration/decoration-circle-lg/decoration-circle-lg.component';
import { DecorationCircleMdComponent } from './components/decoration/decoration-circle-md/decoration-circle-md.component';
import { DecorationCircleSmComponent } from './components/decoration/decoration-circle-sm/decoration-circle-sm.component';
import { DecorationLinesComponent } from './components/decoration/decoration-lines/decoration-lines.component';
import { DecorationDotsComponent } from './components/decoration/decoration-dots/decoration-dots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageTitleComponent,
    FooterComponent,
    ChangeContractComponent,
    ChangeContractMobileComponent,
    DecorationCircleLgComponent,
    DecorationCircleMdComponent,
    DecorationCircleSmComponent,
    DecorationLinesComponent,
    DecorationDotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
