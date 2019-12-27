import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModule } from '../user.module';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userList: [];
  userName: string;
  passWord: string;
  userType: string;
  eMail: string;
  mobileNumber: string;
  confirmed: string;
  userModule: UserModule;

  constructor(private userserviceService: UserserviceService) { }

  ngOnInit() {
    this.userName = '';
    this.userType = '';
    this.passWord = '';
    this.mobileNumber = '';
    this.eMail = '';
    this.confirmed = '';
    this.initList();
  }


  initList() {
    this.userModule = new UserModule();
    this.userModule.id = '';
    this.userserviceService.getUserList(this.userModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        this.userList = result.body;
        console.log('success');
      } else {
        console.log('failure');
      }
    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

}
