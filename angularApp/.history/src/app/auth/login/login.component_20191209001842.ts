import { Component, OnInit } from '@angular/core';
import {LoginModuleModule} from './login-module.module';
import {LoginServiceService} from './login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  userName: string;
  passWord: string;
  loginModuleModule: LoginModuleModule;

  constructor(private loginServiceService: LoginServiceService, private router: Router) { }


  ngOnInit() {

    this.userName = 'test';
    this.passWord = 'test';
    this.initForm();
  }


  initForm() {
    this.formLogin = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      'userName': new FormControl(this.userName),
      'passWord': new FormControl(this.passWord),
    });
  }

  loginSubmit() {
    console.log(this.userName + ':' + this.passWord);
    this.loginServiceService.getLogin(this.loginModuleModule).subscribe(result => {

    });
  }
}
