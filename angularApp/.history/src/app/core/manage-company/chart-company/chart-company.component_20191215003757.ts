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
