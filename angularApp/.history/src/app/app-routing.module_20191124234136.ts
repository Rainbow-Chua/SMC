import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoplayerComponent} from './videoplayer/videoplayer.component';
const routes: Routes = [
  { path: '', component: VideoplayerComponent },
  { path: 'player', component: VideoplayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
