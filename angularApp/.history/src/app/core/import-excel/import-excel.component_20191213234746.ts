import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  [x: string]: any;
  uploadProgress: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload(file: HTMLInputElement) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers
    .set('Cache-Control', 'no-cache')
    .set('Authorization', 'Bearer ' + token);
    if (file.value.length === 0) {
      return;
    }
    // tslint:disable-next-line:semicolon
    const files: FileList = file.files
    const fileLength = files.length;
    const formData: FormData = new FormData();
    for (let index = 0; index < fileLength; index++) {
      const singleFile = files.item(index);
      // files 这个名字和spring mvc controller参数的名字要对应
      formData.append('files', singleFile);
    }
    // for (let singleFile of files.item) {
    //   formData.append(singleFile.name, singleFile);
    // }
    // formData.append('file', file.files[0]);
    const url = 'http://localhost:8090/sba/api/fileUpload';
    const req = new HttpRequest('POST', url, formData, {
        reportProgress: true, headers
    });

    this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('Files uploaded!');
        }
    });
    // this.http.post(url, formData, {headers: headers}).subscribe(data => {
    //   console.log(data);
    // });

}
}
