import { Injectable } from '@angular/core';
// import { CompanyModuleModule } from './company-module.module';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCompanyService {


  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  // createCompany(companyModuleModule: CompanyModuleModule): Observable<any> {
  //   this.API_URL = 'http://localhost:8090';
  //   // http://localhost:8090/views/index
  //   console.log(companyModuleModule);
  //   return this.http.post(this.API_URL + '/sba/api/createCompany', companyModuleModule , {
  //     observe: 'response',
  //     headers: this.headers,
  //     reportProgress: true
  //    });
  // }

  // editCompany(companyModuleModule: CompanyModuleModule): Observable<any> {
  //   this.API_URL = 'http://localhost:8090';
  //   // http://localhost:8090/views/index
  //   console.log(companyModuleModule);
  //   return this.http.post(this.API_URL + '/sba/api/editCompany', companyModuleModule , {
  //     observe: 'response',
  //     headers: this.headers,
  //     reportProgress: true
  //    });
  // }

   getCompare(param?: any): Observable<any> {
      console.log('param' + param);
      this.API_URL = 'http://localhost:8090';
      return this.http.get(this.API_URL + '/sba/api/getCompareCompany', { observe: 'response', params: param });
    }

}
