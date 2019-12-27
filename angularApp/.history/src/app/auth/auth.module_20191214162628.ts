import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { LocalService } from './local.service';


@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [ ],
  exports: [
    AppRoutingModule,
  ],
  entryComponents: [],
  providers: [LocalService]
})
export class AuthModule { }
