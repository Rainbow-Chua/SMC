import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  userName: string;
  passWord: string;
  userType: string;
  eMail: string;
  mobileNumber: string;
  confirmed: string;
  id: string;
}
