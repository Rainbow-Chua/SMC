import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ChartCompanyComponent } from './chart-company/chart-company.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserCommonModule {
  priceList: [];
  dateList: [];
  companyName: string;
  stockExchange: string;
  sector: string;
  fromPeriod: string;
  toPeriod: string;
}
