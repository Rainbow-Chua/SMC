import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SectorModule {
  id: string;
  companyCode: string;
  stockExchang: string;
  currentPrice: string;
  date: string;
  time: string;
}
