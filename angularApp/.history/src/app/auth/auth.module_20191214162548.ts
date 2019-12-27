import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from '../app-routing.module';
import { LocalService } from './local.service';
import { SsoComponent } from './sso/sso.component';
import { ErrorComponent } from './error/error.component';
import { SignInFailedComponent } from './sign-in-failed/sign-in-failed.component';
import { TimeOutComponent } from './time-out/time-out.component';


@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [SigninComponent, SsoComponent, ErrorComponent, SignInFailedComponent, TimeOutComponent],
  exports: [
    AppRoutingModule,
  ],
  entryComponents: [],
  providers: [LocalService]
})
export class AuthModule { }
