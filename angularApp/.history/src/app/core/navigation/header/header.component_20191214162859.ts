import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
// import { LocalService, LoginVM } from '../../../auth/local.service';
import { Router, NavigationEnd } from '@angular/router';
// import { ActionNotice } from '@shared/enum/notice.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isStaffSummary: boolean;
  isDesktop: boolean;
  isSuperAdmin: boolean;
  isAdmin: boolean;
  isStaff: boolean;
  isManager: boolean;
  toggleMaxWidth = 992;
  showAdminTitle: string;
  admin: string;
  user: string;
  constructor( private router: Router
  ) {


  }

  ngOnInit() {
    
    }
  toLogout() {
    // this.local.loginVM = new LoginVM();
    this.router.navigate(['/']);
  }


}
