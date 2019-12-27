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
  // tslint:disable-next-line:no-inferrable-types
  showloading: boolean = true;
  constructor() {
    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

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

  Baroptions = {
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
  }



  linkoption = {
    title: {
      text: 'Stock Market Charting'
    },
    color: ['#3398DB'],
    //气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        //显示缩放按钮
        dataZoom: {
          show: true
        },
        //显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        //显示是否还原
        restore: {
          show: true
        },
        //是否显示图片
        saveAsImage: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [21231,1212,21231,3213],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: "The company's daily stock price",
      type: 'value'
    }],
    series: [{
      name: 'Share price today',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data:[21231,1212,21231,3213]
    }]
  }

}
