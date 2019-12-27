import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectorModule } from '../sector-manage/sector.module';

@Injectable({
  providedIn: 'root'
})
export class SectorserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }


  getUserList(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/getUserList', { observe: 'response', params: param });
    }


  editSUser(sectorModule: SectorModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(sectorModule);
    return this.http.post(this.API_URL + '/sba/api/editUser', sectorModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

  editSec(sectorModule: SectorModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(sectorModule);
    return this.http.post(this.API_URL + '/sba/api/editUser', sectorModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

    editUser(sectorModule: SectorModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(sectorModule);
    return this.http.post(this.API_URL + '/sba/api/editUser', sectorModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

  getUser(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/getUser', { observe: 'response', params: param });
    }
}
