import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../manage-user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }


  getUserList(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/getUserList', { observe: 'response', params: param });
    }
}
