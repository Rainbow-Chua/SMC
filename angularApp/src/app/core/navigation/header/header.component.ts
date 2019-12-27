import { Component, OnInit } from '@angular/core';
// import { LocalService, LoginVM } from '../../../auth/local.service';
import { Router, NavigationEnd } from '@angular/router';
import { LocalService } from '../../../auth/local.service';

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
  constructor( private router: Router, private local: LocalService
  ) {


  }

  ngOnInit() {
      this.user = '';
      console.log(this.local.loginVM.userType + ':userType');
      if ('Admin' === this.local.loginVM.userType) {
        this.admin = 'admin';
      }
      if ('User' === this.local.loginVM.userType) {
        this.user = 'user';
      }
    }
  toLogout() {
    // this.local.loginVM = new LoginVM();
    this.router.navigate(['/']);
  }


}
