import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  formSignup: FormGroup;
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
    this.passWord = '';
    this.eMail = '';
    this.confirmed = '';
    this.mobileNumber = '';
  }


  initForm() {
    this.formSignup = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      userName: new FormControl(this.userName),
      passWord: new FormControl(this.passWord),
      userType: new FormControl(this.userType),
      eMail: new FormControl(this.eMail),
      confirmed: new FormControl(this.confirmed),
      mobileNumber: new FormControl(this.mobileNumber),
    });
  }

}
