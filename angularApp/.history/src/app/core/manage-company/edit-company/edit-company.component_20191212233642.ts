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
  createCompanyFrom: FormGroup;
  ipoDate: string;
  briefDescription: string;
  turnOver: string;
  ceo: string;
  companyName: string;

  constructor(private ecompanyserviceService: ECompanyserviceService, private router: Router) { }

  ngOnInit() {
    this.companyName = '';
    this.ceo = '';
    this.ipoDate = '';
    this.briefDescription = '';
    this.turnOver = '';
    this.initForm();
  }

  initForm() {
    this.createCompanyFrom = new FormGroup({
      turnOver: new FormControl(this.turnOver),
      briefDescription: new FormControl(this.briefDescription),
      ipoDate: new FormControl(this.ipoDate),
      companyName: new FormControl(this.companyName),
      ceo: new FormControl(this.ceo),
    });

  }

  save() {
    this.ccompanyModule = new ECompanyModule();
    this.ccompanyModule.companyName = this.companyName;
    this.ccompanyModule.ceo = this.ceo;
    this.ccompanyModule.boardOfDirectors = this.briefDescription;
    this.ccompanyModule.turnover = this.turnOver;
    this.ccompanyModule.briefWriteu = this.ipoDate;
    this.ecompanyserviceService.editCompany(this.ccompanyModule).subscribe(result => {
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
