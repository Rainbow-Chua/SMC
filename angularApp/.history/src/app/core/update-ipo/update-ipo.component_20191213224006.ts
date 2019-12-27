import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {

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
