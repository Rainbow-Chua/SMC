import { Injectable } from '@angular/core';
// import { environment } from '@environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModuleModule } from './login-module.module';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  getLogin(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    return this.http.get(this.API_URL + '/sba/api/login', { observe: 'response', params: param });
  }

}
