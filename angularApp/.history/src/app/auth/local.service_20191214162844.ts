import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocalService {
  loginVM: LoginVM = new LoginVM();
  API_URL: string = environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  /**
   *
   *  param
   */
  auth(param?: LoginVM): Observable<any> {
    return this.http.post(this.API_URL + '/api/authenticate', param);
  }
  getEnv(): Observable<any> {
    return this.http.get('/config');
  }
}


export class LoginVM {
  public userId?: string;
  public password?: string;
  public accessRight?: string;
}
