import { Component, OnInit } from '@angular/core';
import { UserModule } from '../user.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formEditUser: FormGroup;
  userModule: UserModule;
  userName: string;
  passWord: string;
  userType: string;
  eMail: string;
  mobileNumber: string;
  confirmed: string;
  id: string;

  constructor(private userserviceService: UserserviceService) { }

  ngOnInit() {
    this.initForm();
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    if (this.id) {
      this.getDetail(this.id);
    }
  }

  getDetail(pID: string) {
    this.userModule = new UserModule();
    this.userModule.id = this.id;
    this.userserviceService.getUser(this.userModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        console.log('success');
        this.userName = result.body.userName;
        this.passWord = result.body.passWord;
        this.userType = result.body.userType;
        this.mobileNumber = result.body.mobileNumber;
        this.confirmed = result.body.confirmed;
        this.id =  result.body.id;
      } else {
        console.log('failure');
      }

    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

  initForm() {
    this.formEditUser = new FormGroup({
      id: new FormControl(this.id),
      userName: new FormControl(this.userName),
      passWord: new FormControl(this.passWord),
      userType: new FormControl(this.userType),
      eMail: new FormControl(this.eMail),
      mobileNumber: new FormControl(this.mobileNumber),
      confirmed: new FormControl(this.confirmed),
    });

  }

}
