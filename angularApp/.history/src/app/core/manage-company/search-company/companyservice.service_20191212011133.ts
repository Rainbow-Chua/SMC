import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CompanyModule } from './company.module';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  createCompany(companyModuleModule: CompanyModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(companyModuleModule);
    return this.http.post(this.API_URL + '/sba/api/createCompany', companyModuleModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

  editCompany(companyModuleModule: CompanyModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(companyModuleModule);
    return this.http.post(this.API_URL + '/sba/api/editCompany', companyModuleModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

   queryCompany(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/searchCompany', { observe: 'response', params: param });
    }
}
