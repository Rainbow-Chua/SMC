import { Component, OnInit } from '@angular/core';
import { UserModule } from '../user.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ExchangeserviceService} from './exchangeservice.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formEditUser: FormGroup:
  userModule: UserModule;
  userName: string;
  passWord: string;
  userType: string;
  eMail: string;
  mobileNumber: string;
  confirmed: string;

  constructor() { }

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
    this.exchangeModule = new ExchangeModule();
    this.exchangeModule.id = this.id;
    this.exchangeserviceService.getExchange(this.exchangeModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        console.log('success');
        this.stockExchange = result.body.stockExchange;
        this.brief = result.body.brief;
        this.contactAddress = result.body.contactAddress;
        this.remarks = result.body.remarks;
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
    this.editExchangeFrom = new FormGroup({
      id: new FormControl(this.id),
      stockExchange: new FormControl(this.stockExchange),
      brief: new FormControl(this.brief),
      contactAddress: new FormControl(this.contactAddress),
      remarks: new FormControl(this.remarks),
    });

  }

}
