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
  loginForm: FormGroup;
  userName: string;
  passWord: string;
  loginModuleModule: LoginModuleModule;

  constructor(private loginServiceService: LoginServiceService, private router: Router) { }


  initForm() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(this.userName),
      'passWord': new FormControl(this.passWord),
    });
  }

  ngOnInit() {
    this.userName = '';
    this.passWord = '';
  }

  loginSubmit() {
    this.loginServiceService.getLogin(this.loginModuleModule).subscribe(result => {

    });
  }
}
