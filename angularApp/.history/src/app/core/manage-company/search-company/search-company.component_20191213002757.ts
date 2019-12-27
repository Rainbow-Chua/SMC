import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyModule } from './company.module';
import {CompanyserviceService} from './companyservice.service';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {
  companyModule: CompanyModule;
  companyList: [];
  constructor(private companyserviceService: CompanyserviceService , private router: Router) { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.companyModule = new CompanyModule();
    this.companyModule.companyName = '';
    this.companyserviceService.queryCompany(this.companyModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        this.companyList = result.body;
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
