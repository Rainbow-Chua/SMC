// import { Injectable } from '@angular/core';
// // import { environment } from '@environment';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LoginModuleModule } from './login-module.module';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginServiceService {
//   API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
//   headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//   constructor(private http: HttpClient) {
//     this.API_URL = 'http://localhost:8090';
//   }

//   getLogin(param?: any): Observable<any> {
//     // http://localhost:8090/views/index
//     return this.http.get(this.API_URL + '/views/login', { observe: 'response', params: param });
//   }

// }
