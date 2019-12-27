import { Injectable } from '@angular/core';
// import { environment } from '@environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupModuleModule } from './signup-module.module';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  signup(signupModuleModule: SignupModuleModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(signupModuleModule);
    return this.http.post(this.API_URL + '/sba/api/signupUser', signupModuleModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }
}
