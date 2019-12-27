import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeModule } from './exchange.module';

@Injectable({
  providedIn: 'root'
})
export class ExchangeserviceService {

  API_URL: string; // = 'http://localhost:8088'; //environment.API_URL;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }


  editExchange(exchangeModule: ExchangeModule): Observable<any> {
    this.API_URL = 'http://localhost:8090';
    // http://localhost:8090/views/index
    console.log(exchangeModule);
    return this.http.post(this.API_URL + '/sba/api/editExchange', exchangeModule , {
      observe: 'response',
      headers: this.headers,
      reportProgress: true
     });
  }

  getExchange(param?: any): Observable<any> {
    this.API_URL = 'http://localhost:8090';

    return this.http.get(this.API_URL + '/sba/api/getExchange', { observe: 'response', params: param });
    }

}
