import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  id: string;
  stockExchange: string;
  passWord: string;
  brief: string;
  contactAddress: string;
  remarks: string;
}
