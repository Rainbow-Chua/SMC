import { Component, OnInit } from '@angular/core';
import {LoginModuleModule} from './login-module.module';
import {LoginServiceService} from './login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalService } from '../../auth/local.service';
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
  status: string;

  constructor(private loginServiceService: LoginServiceService, private router: Router, private local: LocalService) { }


  ngOnInit() {
    this.status = '';
    this.userName = 'user';
    this.passWord = '123456';
    this.initForm();
  }


  initForm() {
    this.formLogin = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      userName: new FormControl(this.userName),
      passWord: new FormControl(this.passWord),
    });
  }

  loginSubmit() {
    this.loginModuleModule = new LoginModuleModule();
    this.loginModuleModule.userName = this.userName;
    this.loginModuleModule.passWord = this.passWord;
    this.loginServiceService.getLogin(this.loginModuleModule).subscribe(result => {
      let struserType = result.body;
      console.log(result.body);
      if (struserType !== '' && struserType !== null) {
        this.local.loginVM.userName = result.body.userName;
        this.local.loginVM.userType = result.body.userType;
        this.status = 'Login Success';
        console.log('login success');
        this.router.navigate(['/home/']);
      } else {
        this.status = 'Login Fail';
        console.log('fail');
      }
    }, error => {
      // this.router.navigate(['/logout']);
      console.log('test');
    });
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
