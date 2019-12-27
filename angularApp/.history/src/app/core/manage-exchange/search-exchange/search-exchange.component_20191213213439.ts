import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExchangeModule } from './exchange.module';
import {ExchangeserviceService} from './exchangeservice.service';

@Component({
  selector: 'app-search-exchange',
  templateUrl: './search-exchange.component.html',
  styleUrls: ['./search-exchange.component.css']
})
export class SearchExchangeComponent implements OnInit {
  exchangeModule: ExchangeModule;
  ExchangeList: [];
  constructor(private exchangeserviceService: ExchangeserviceService , private router: Router) { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.exchangeModule = new ExchangeModule();
    this.exchangeModule.id = '';
    this.exchangeserviceService.queryExchange(this.exchangeModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        this.ExchangeList = result.body;
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
