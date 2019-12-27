import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

   userName: string;
   passWord: string;
   userType: string;
   eMail: string;
   mobileNumber: string;
   confirmed: string;

  constructor() { }

  ngOnInit() {
    this.userName = '';
    this.userType = '';
  }

}
