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
  constructor(private companyserviceService: CompanyserviceService , private router: Router) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.companyModule = new CompanyModule();
    this.companyserviceService.queryCompany(this.companyModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
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
