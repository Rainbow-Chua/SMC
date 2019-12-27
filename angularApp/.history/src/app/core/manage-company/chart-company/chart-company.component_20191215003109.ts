import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceCompanyService } from '../service-company.service';
import { UserCommonModule } from '../user-common.module';

@Component({
  selector: 'app-chart-company',
  templateUrl: './chart-company.component.html',
  styleUrls: ['./chart-company.component.css']
})
export class ChartCompanyComponent implements OnInit {
  formCompare: FormGroup;
  company: string;
  exchange: string;
  companyName: string;
  status: string;
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

public randomize(): void {
  // Only Change 3 values
  const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
  ];
  const clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
   */
}
public barChartLabels: string[] = [
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012'
];
public barChartType: string;
public barChartLegend: boolean;
 // bar chart
 public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};

  constructor() {}

  ngOnInit() {
    this.company = 'Company';
    this.companyName = '';
    this.exchange = 'BSE';
    this.status = '';
    this.initForm();
  }

  initForm() {
    this.formCompare = new FormGroup({
      company: new FormControl(this.company),
      companyName: new FormControl(this.companyName),
      exchange: new FormControl(this.exchange)
    });
  }

  save() {

  }
}
