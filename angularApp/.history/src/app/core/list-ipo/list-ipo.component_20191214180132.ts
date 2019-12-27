import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.css']
})
export class ListIPOComponent implements OnInit {

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
