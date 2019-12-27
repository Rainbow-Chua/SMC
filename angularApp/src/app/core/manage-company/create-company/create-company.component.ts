import { Component, OnInit } from '@angular/core';
import { CCompanyModule } from './ccompany.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {CCompanyserviceService} from './ccompanyservice.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  ccompanyModule: CCompanyModule;
  createCompanyFrom: FormGroup;
  ipoDate: string;
  briefDescription: string;
  turnOver: string;
  ceo: string;
  companyName: string;
  status: string;
  sector: string;
  companyCode: string;

  constructor(private ccompanyserviceService: CCompanyserviceService, private router: Router) { }

  ngOnInit() {
    this.companyName = '';
    this.ceo = '';
    this.ipoDate = '';
    this.briefDescription = '';
    this.turnOver = '';
    this.status = '';
    this.sector = '';
    this.companyCode = '';
    this.initForm();
  }

  initForm() {
    this.createCompanyFrom = new FormGroup({
      turnOver: new FormControl(this.turnOver),
      briefDescription: new FormControl(this.briefDescription),
      ipoDate: new FormControl(this.ipoDate),
      companyName: new FormControl(this.companyName),
      sector: new FormControl(this.sector),
      ceo: new FormControl(this.ceo),
      companyCode: new FormControl(this.companyCode),
    });

  }

  save() {
    this.ccompanyModule = new CCompanyModule();
    this.ccompanyModule.companyName = this.companyName;
    this.ccompanyModule.ceo = this.ceo;
    this.ccompanyModule.boardOfDirectors = this.briefDescription;
    this.ccompanyModule.turnover = this.turnOver;
    this.ccompanyModule.briefWriteu = this.ipoDate;
    this.ccompanyModule.sector = this.sector;
    this.ccompanyModule.id = this.companyCode;
    this.ccompanyserviceService.createCompany(this.ccompanyModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
          this.status = 'Save Success';

      } else {
        this.status = 'Save Fail';
        console.log('failure');
      }

    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

}
