import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ExchangeModule {
  id: string;
  stockExchange: string;
  brief: string;
  contactAddress: string;
  remarks: string;
}
