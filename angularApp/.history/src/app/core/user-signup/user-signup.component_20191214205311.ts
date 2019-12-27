import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SignupModuleModule } from './signup-module.module';
import { SignupServiceService } from './signup-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signupModuleModule: SignupModuleModule;
  formSignup: FormGroup;
   userName: string;
   passWord: string;
   userType: string;
   eMail: string;
   mobileNumber: string;
   confirmed: string;
   status: string;

  constructor(private signupServiceService: SignupServiceService, private router: Router) { }

  ngOnInit() {
    this.status = '';
    this.userName = '';
    this.userType = 'Admin';
    this.passWord = '';
    this.eMail = '';
    this.confirmed = '';
    this.mobileNumber = '';
    this.initForm();
  }


  initForm() {
    this.formSignup = new FormGroup({
      userName: new FormControl(this.userName),
      passWord: new FormControl(this.passWord),
      userType: new FormControl(this.userType),
      eMail: new FormControl(this.eMail),
      confirmed: new FormControl(this.confirmed),
      mobileNumber: new FormControl(this.mobileNumber),
    });
  }

  signupSubmit() {
    this.signupModuleModule = new SignupModuleModule();
    this.signupModuleModule.userName = this.userName;
    this.signupModuleModule.userType = this.userType;
    this.signupModuleModule.passWord = this.passWord;
    this.signupModuleModule.eMail = this.eMail;
    this.signupModuleModule.mobileNumber = this.mobileNumber;
    this.signupModuleModule.confirmed = this.confirmed;
    this.signupServiceService.signup(this.signupModuleModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.userName) {
        this.status = 'Save Success';
        console.log('success');
      } else {
        this.status = 'Save Fail';
        console.log('fail');
      }

    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

  clearSubmit() {
    this.formSignup.reset();
  }

  goToLogin() {
    this.router.navigate(['/']);
  }

}
