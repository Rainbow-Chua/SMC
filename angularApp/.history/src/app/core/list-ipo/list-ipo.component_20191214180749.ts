import { Component, OnInit } from '@angular/core';
import {IposerviceService} from './iposervice.service';
import { IpoModulepo } from './ipo.module';

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
  constructor(private iposerviceService: IposerviceService) { }

  ngOnInit() {
  }

}
