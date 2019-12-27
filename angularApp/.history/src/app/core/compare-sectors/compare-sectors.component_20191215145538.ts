import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compare-sectors',
  templateUrl: './compare-sectors.component.html',
  styleUrls: ['./compare-sectors.component.css']
})
export class CompareSectorsComponent implements OnInit {
  formCompare2: FormGroup;
  company: string;
  exchange: string;
  companyName: string;
  status: string;
  priceList: [];
  dateList: [];
  fromPeriod: string;
  toPeriod: string;
  Baroptions: any;
  // tslint:disable-next-line:no-inferrable-types
  showloading: boolean = true;
  constructor() {
     setTimeout(() => {
      this.showloading = false;
    }, 3000);
   }

  ngOnInit() {
    this.showloading = false;
    this.Baroptions = '';
    this.company = 'Company';
    this.companyName = '';
    this.exchange = 'BSE';
    this.status = '';
    this.initForm();
    this.bandData();
  }
  initForm() {
    this.formCompare2 = new FormGroup({
      company: new FormControl(this.company),
      companyName: new FormControl(this.companyName),
      exchange: new FormControl(this.exchange)
    });
  }

  save() {
    
  }

  bandData() {
  this.Baroptions = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['administrative', 'marketing', 'Software R&D']
    },
    series: [
      {
        name: 'DataSource',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: 'administrative', selected: true },
          { value: 679, name: 'marketing' },
          { value: 1548, name: 'Software R&D' }
        ]
      }
      
    ]
  };
  }
}
