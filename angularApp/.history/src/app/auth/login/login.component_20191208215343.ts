import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginSubmit() {
    this.searchingFileService.getSearchBFS(this.searchingFilePara).subscribe(result => {
      this.dialog.getDialogById(loading).close();
      const count = result['body']['count'];
      const strResult = result['body']['searchFileData'];
      console.log('count:'  + count);
      if (count > 100) {
        this.validNotice(null, 'Message', ActionNotice.SEARCH_MSG);
      } else {
        this.searchingFileSource = new MatTableDataSource<SearchingFileModule>(result['body']['searchFileData']);
      }
    });
  }
}
