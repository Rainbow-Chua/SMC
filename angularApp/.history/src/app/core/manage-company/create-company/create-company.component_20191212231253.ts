import { Component, OnInit } from '@angular/core';
import { CCompanyModule } from './ccompany.module';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  ccompanyModule: CCompanyModule;
  ipoDate: string;
  briefDescription: string;
  turnOver: string;
  ceo: string;
  companyName: string;

  constructor() { }

  ngOnInit() {
  }

}
