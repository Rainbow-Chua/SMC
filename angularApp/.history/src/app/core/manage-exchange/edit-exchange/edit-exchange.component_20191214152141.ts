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
  status: string;
  constructor(private exchangeserviceService: ExchangeserviceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = '';
    this.stockExchange = '';
    this.brief = '';
    this.contactAddress = '';
    this.remarks = '';
    this.status = '';
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

  save() {
    this.exchangeModule = new ExchangeModule();
    this.exchangeModule.id = this.id;
    this.exchangeModule.stockExchange = this.stockExchange;
    this.exchangeModule.brief = this.brief;
    this.exchangeModule.contactAddress = this.contactAddress;
    this.exchangeModule.remarks = this.remarks;
    this.exchangeserviceService.editExchange(this.exchangeModule).subscribe(result => {
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
