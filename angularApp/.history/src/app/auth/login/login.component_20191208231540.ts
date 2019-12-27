import { Component, OnInit } from '@angular/core';
import {LoginModuleModule} from './login-module.module';
import {LoginServiceService} from './login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  passWord: string;
  loginModuleModule: LoginModuleModule;

  constructor(private loginServiceService: LoginServiceService, private router: Router) { }

  ngOnInit() {
    this.userName = '';
    this.passWord = '';
  }

  loginSubmit() {
    this.loginServiceService.getLogin(this.loginModuleModule).subscribe(result => {

    });
  }
}
