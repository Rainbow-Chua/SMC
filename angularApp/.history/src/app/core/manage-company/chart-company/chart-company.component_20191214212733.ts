import { Component, OnInit } from '@angular/core';
import { CCompanyModule } from './ccompany.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceCompanyService} from '../service-company.service';
import { UserCommonModule } from '../user-common.module';

@Component({
  selector: 'app-chart-company',
  templateUrl: './chart-company.component.html',
  styleUrls: ['./chart-company.component.css']
})
export class ChartCompanyComponent implements OnInit {
  formCompare:
  constructor() { }

  ngOnInit() {
  }

}
