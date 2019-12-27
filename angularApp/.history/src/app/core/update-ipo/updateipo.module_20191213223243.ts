import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UpdateipoModule {
  id: string;
  companyName: string;
  stockExchange: string;
  pricePerShare: string;
  totalShares: string;
  openDateTime: string;
  remarks: string;
}
