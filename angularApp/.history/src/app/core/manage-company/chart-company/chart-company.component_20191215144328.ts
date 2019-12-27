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
  userCommonModule: UserCommonModule;
  priceList: [];
  dateList: [];
  fromPeriod: string;
  toPeriod: string;
  linkoption: any;
  // tslint:disable-next-line:no-inferrable-types
  showloading: boolean = true;
  constructor(private serviceCompanyService: ServiceCompanyService) {
    // setTimeout(() => {
    //   this.showloading = false;
    // }, 3000);
  }

  ngOnInit() {
    this.showloading = false;
    this.linkoption = '';
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
    this.userCommonModule = new UserCommonModule();
    this.userCommonModule.companyName = this.companyName;
    this.userCommonModule.stockExchange = this.exchange;
    this.userCommonModule.sector = this.company;
    this.userCommonModule.fromPeriod = this.fromPeriod;
    this.userCommonModule.toPeriod = this.toPeriod;

    this.serviceCompanyService.getCompare(this.userCommonModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.companyName) {
        // this.save();
        this.dateList = result.body.dateList;
        this.priceList = result.body.priceList;
        console.log('success'+ this.dateList);
        this.bandData();
      } else {
        this.status = 'Not Any Data，please add Company Name';
        console.log('failure');
      }
    }, error => {
      // this.router.navigate(['/']);
      this.status = 'Not Data';
      console.log('test');
    });


  }

   bandData() {
     console.log(this.dateList+"this.dateList");
    this.linkoption = {
      title: {
        text: 'Stock Market Charting'
      },
      color: ['#3398DB'],
      //气泡提示框，常用于展现更详细的数据
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        show: true,
        feature: {
          // //显示缩放按钮
          // dataZoom: {
          //   show: true
          // },
          //  //显示是否还原
          //  restore: {
          //   show: true
          // },
          //显示折线和块状图之间的切换
          magicType: {
            show: true,
            type: ['bar', 'line']
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
        data: this.dateList,//['2019/06/07','2019/06/08','2019/06/09','2019/06/10'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0,
          rotate: 20
        },
      }],
      yAxis: [{
        name: "Daily share price",
        type: 'value'
      }],
      series: [{
        name: 'Share price today',
        type: 'line',
        barWidth: '60%',
        label: {
          normal: {
            show: true
          }
        },
        data: this.priceList //['130','122','1231','213']
      }]
    }
   }




}
