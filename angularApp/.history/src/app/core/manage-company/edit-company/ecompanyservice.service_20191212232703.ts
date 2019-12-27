import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CCompanyModule } from './ccompany.module';

@Injectable({
  providedIn: 'root'
})
export class CCompanyserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  createCompany(companyModuleModule: CCompanyModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(companyModuleModule);
    return this.http.post(this.API_URL + '/sba/api/createCompany', companyModuleModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

}
