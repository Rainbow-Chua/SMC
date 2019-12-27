import { Component, OnInit } from '@angular/core';
import { UpdateipoModule } from './updateipo.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ExchangeserviceService} from './updateipo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {
  updateipoModule: UpdateipoModule;
  companyName: string;
  stockExchange: string;
  pricePerShare: string;
  totalShares: string;
  openDateTime: string;
  remarks: string;
  id: string;

  constructor(private exchangeserviceService: ExchangeserviceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getDetail();
  }


  getDetail() {
    this.updateipoModule = new UpdateipoModule();
    this.updateipoModule.id = this.id;
    this.exchangeserviceService.getIPODetails(this.updateipoModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        console.log('success');
        this.companyName = result.body.companyName;
        this.stockExchange = result.body.stockExchange;
        this.pricePerShare = result.body.pricePerShare;
        this.totalShares = result.body.totalShares;
        this.openDateTime = moment(result.body.openDateTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
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


}
