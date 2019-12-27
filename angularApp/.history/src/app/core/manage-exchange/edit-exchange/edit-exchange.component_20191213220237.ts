import { Component, OnInit } from '@angular/core';
import { ExchangeModule } from './exchange.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ExchangeserviceService} from './exchangeservice.service';


@Component({
  selector: 'app-edit-exchange',
  templateUrl: './edit-exchange.component.html',
  styleUrls: ['./edit-exchange.component.css']
})
export class EditExchangeComponent implements OnInit {


  exchangeModule: ExchangeModule;
  editExchangeFrom: FormGroup;
  id: string;
  stockExchange: string;
  brief: string;
  contactAddress: string;
  remarks: string;

  constructor(private exchangeserviceService: ExchangeserviceService, private router: Router) { }

  ngOnInit() {
    this.id = '';
    this.stockExchange = '';
    this.brief = '';
    this.contactAddress = '';
    this.remarks = '';
    this.initForm();
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
