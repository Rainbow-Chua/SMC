import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ECompanyModule } from './ecompany.module';

@Injectable({
  providedIn: 'root'
})
export class ECompanyserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

 
  editCompany(companyModuleModule: ECompanyModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(companyModuleModule);
    return this.http.post(this.API_URL + '/sba/api/editCompany', companyModuleModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

}
