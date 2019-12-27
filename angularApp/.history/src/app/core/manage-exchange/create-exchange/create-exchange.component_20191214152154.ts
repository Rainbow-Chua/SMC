import { Component, OnInit } from '@angular/core';
import { ExchangeModule } from './exchange.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ExchangeserviceService} from './exchangeservice.service';

@Component({
  selector: 'app-create-exchange',
  templateUrl: './create-exchange.component.html',
  styleUrls: ['./create-exchange.component.css']
})
export class CreateExchangeComponent implements OnInit {

  exchangeModule: ExchangeModule;
  createCompanyFrom: FormGroup;
  id: string;
  stockExchange: string;
  brief: string;
  contactAddress: string;
  remarks: string;
  status: string;

  constructor(private exchangeserviceService: ExchangeserviceService, private router: Router) { }

  ngOnInit() {
    this.id = '';
    this.stockExchange = '';
    this.brief = '';
    this.contactAddress = '';
    this.remarks = '';
    this.status = '';
    this.initForm();
  }

  initForm() {
    this.createCompanyFrom = new FormGroup({
      id: new FormControl(this.id),
      stockExchange: new FormControl(this.stockExchange),
      brief: new FormControl(this.brief),
      contactAddress: new FormControl(this.contactAddress),
      remarks: new FormControl(this.remarks),
    });

  }

  save() {
    this.exchangeModule = new ExchangeModule();
    this.exchangeModule.id = this.id;
    this.exchangeModule.stockExchange = this.stockExchange;
    this.exchangeModule.brief = this.brief;
    this.exchangeModule.contactAddress = this.contactAddress;
    this.exchangeModule.remarks = this.remarks;
    this.exchangeserviceService.createCompany(this.exchangeModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        this.status = 'Save Success';

    } else {
      this.status = 'Save Fail';
      console.log('failure');
    }

    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

}
