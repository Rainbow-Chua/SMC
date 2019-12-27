import { Component, OnInit } from '@angular/core';
import { ECompanyModule } from './ecompany.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ECompanyserviceService} from './ecompanyservice.service';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  ccompanyModule: ECompanyModule;
  editCompanyFrom: FormGroup;
  ipoDate: string;
  briefDescription: string;
  turnOver: string;
  ceo: string;
  companyName: string;
  id: string;
  status: string;
  sector: string;

  constructor(private ecompanyserviceService: ECompanyserviceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = '';
    this.ceo = '';
    this.ipoDate = '';
    this.briefDescription = '';
    this.turnOver = '';
    this.initForm();
    // this.id = this.activatedRoute.snapshot.queryParams.id;
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
    if (this.id) {
      this.getDetail(this.id);
    }
  }

  getDetail(pID: string) {
    this.ccompanyModule = new ECompanyModule();
    this.ccompanyModule.id = this.id;
    this.ecompanyserviceService.getCompany(this.ccompanyModule).subscribe(result => {
      // this.router.navigate(['/']);
      if ('' !== result.body.id) {
        console.log('success');
        this.companyName = result.body.companyName;
        this.ceo = result.body.ceo;
        this.ipoDate = '';
        this.briefDescription = result.body.boardOfDirectors;
        this.turnOver = result.body.turnover;
        this.id =  result.body.id;
        this.sector =  result.body.sector;
      } else {
        console.log('failure');
      }

    }, error => {
      // this.router.navigate(['/']);
      console.log('test');
    });
  }

  initForm() {
    this.editCompanyFrom = new FormGroup({
      turnOver: new FormControl(this.turnOver),
      briefDescription: new FormControl(this.briefDescription),
      ipoDate: new FormControl(this.ipoDate),
      companyName: new FormControl(this.companyName),
      sector: new FormControl(this.sector),
      ceo: new FormControl(this.ceo),
    });

  }

  save() {
    this.ccompanyModule = new ECompanyModule();
    this.ccompanyModule.companyName = this.companyName;
    this.ccompanyModule.ceo = this.ceo;
    this.ccompanyModule.boardOfDirectors = this.briefDescription;
    if (this.turnOver === null || this.turnOver === '') {
      this.ccompanyModule.turnover = '0';
    } else {
      this.ccompanyModule.turnover = this.turnOver;
    }
    this.ccompanyModule.briefWriteu = this.ipoDate;
    this.ccompanyModule.id = this.id;
    this.ccompanyModule.sector = this.sector;
    console.log(this.id);
    this.ecompanyserviceService.editCompany(this.ccompanyModule).subscribe(result => {
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
