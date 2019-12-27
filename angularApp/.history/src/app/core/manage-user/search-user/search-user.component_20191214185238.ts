import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
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
    this.mobileNumber = '';
    this.eMail = '';
    this.confirmed = '';
  }

}
