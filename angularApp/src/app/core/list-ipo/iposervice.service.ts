import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpoModule } from './ipo.module';

@Injectable({
  providedIn: 'root'
})
export class IposerviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  createCompany(ipoModule: IpoModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(ipoModule);
    return this.http.post(this.API_URL + '/sba/api/createCompany', ipoModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }


  getIPOList(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/getIPOList', { observe: 'response', params: param });
    }
}
