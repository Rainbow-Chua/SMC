import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';
import {LoginComponent} from './auth/login/login.component';
import {CoreComponent} from './core/core.component';
import {ListCompanyComponent} from './core/list-company/list-company.component';

const routes: Routes = [
  // { path: '', component: VideoplayerComponent },
  { path: '', component: LoginComponent },
  { path: 'playerUrl', component: VideoplayerComponent },
  {
    path: 'home', component: CoreComponent, children: [
      { path: '', component: ListCompanyComponent},
      // { path: 'searching-file', component: SearchingFileComponent, canActivate: [StaffGuard] },
      // { path: 'create-bul-file', component: CreateBulFileComponent, canActivate: [StaffGuard], canDeactivate: [UnsaveGuard] },
      // { path: 'create-bs-file', component: CreateBsFileComponent, canActivate: [StaffGuard], canDeactivate: [UnsaveGuard] },
      // { path: 'print-bul-letter', component: PrintBulLetterComponent, canActivate: [StaffGuard] },
      // { path: 'print-file-report', component: PrintFileReportComponent, canActivate: [StaffGuard] },
      // { path: 'access-right', component: AccessRightComponent, canActivate: [AdminGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
