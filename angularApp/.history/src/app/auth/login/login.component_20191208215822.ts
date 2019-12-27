import { Component, OnInit } from '@angular/core';
import {LoginModuleModule} from './login-module.module';
import {LoginServiceService} from './login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModuleModule: LoginModuleModule;

  constructor(private loginServiceService: LoginServiceService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.loginServiceService.getLogin(this.searchingFilePara).subscribe(result => {
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
