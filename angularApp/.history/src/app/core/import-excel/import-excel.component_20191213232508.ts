import { Component, OnInit } from '@angular/core';
import { ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exportInternalOrder(body) {
    let user_token: string = this.sessionService.getToken();
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + user_token);
    return this.http.post(this.config.exportInternalOrder, body,{
        headers: headers,
        responseType: ResponseContentType.Blob
    }).map(res => new Blob([res._body],{ type: 'application/vnd.ms-excel' }));
}

}
