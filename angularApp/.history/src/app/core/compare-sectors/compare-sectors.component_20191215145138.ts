import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compare-sectors',
  templateUrl: './compare-sectors.component.html',
  styleUrls: ['./compare-sectors.component.css']
})
export class CompareSectorsComponent implements OnInit {
  formCompare: FormGroup;
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
    this.bandData();
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
      data: ['直达', '营销广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
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
          { value: 335, name: '直达', selected: true },
          { value: 679, name: '营销广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      }
      
    ]
  };
  }
}
