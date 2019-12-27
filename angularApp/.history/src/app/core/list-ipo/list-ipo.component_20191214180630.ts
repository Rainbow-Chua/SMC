import { Component, OnInit } from '@angular/core';
import {IposerviceService} from './iposervice.service';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.css']
})
export class ListIPOComponent implements OnInit {
  ipoList: [];
  companyName: string;
  stockExchange: string;
  pricePerShare: string;
  totalShares: string;
  openDateTime: string;
  remarks: string;
  constructor() { }

  ngOnInit() {
  }

}
