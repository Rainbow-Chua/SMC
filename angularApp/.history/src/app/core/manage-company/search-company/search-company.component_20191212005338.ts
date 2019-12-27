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
  // companyModuleModule: CompanyModuleModule;
  constructor() { }

  ngOnInit() {
  }

  signupSubmit() {
    this.companyModuleModule = new CompanyModuleModule();
    this.signupServiceService.signup(this.companyModuleModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.userName) {
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
