import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModuleModule } from './login-module.module';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  API_URL: string = environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getSreaching(param?: any): Observable<any> {
    return this.http.get(this.API_URL + '/api/searching', { observe: 'response', params: param });
  }

}
