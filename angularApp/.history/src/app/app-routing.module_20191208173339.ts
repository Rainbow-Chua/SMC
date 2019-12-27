import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';
import {LoginComponent} from './auth/login/login.component';
const routes: Routes = [
  // { path: '', component: VideoplayerComponent },
  { path: '', component: LoginComponent },
  { path: 'playerUrl', component: VideoplayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
