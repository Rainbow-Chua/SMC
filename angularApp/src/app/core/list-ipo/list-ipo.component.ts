import { Component, OnInit } from '@angular/core';
import {IposerviceService} from './iposervice.service';
import { IpoModule } from './ipo.module';

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
  ipoModule: IpoModule;

  constructor(private iposerviceService: IposerviceService) { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.ipoModule = new IpoModule();
    this.ipoModule.companyName = '';
    this.iposerviceService.getIPOList(this.ipoModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        this.ipoList = result.body;
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
