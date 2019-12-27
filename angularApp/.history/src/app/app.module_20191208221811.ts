import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { ControlsComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { StorageService } from './services/storage.service';
import { LoginComponent } from './auth/login/login.component';
import { CoreComponent } from './core/core.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HeaderComponent } from './core/navigation/header/header.component';
import { UserSignupComponent } from './core/user-signup/user-signup.component';
import { ListCompanyComponent } from './core/list-company/list-company.component';
import { ImportExcelComponent } from './core/import-excel/import-excel.component';
import { ManageCompanyComponent } from './core/manage-company/manage-company.component';
import { ManageExchangeComponent } from './core/manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './core/update-ipo/update-ipo.component';
import { SearchCompanyComponent } from './core/manage-company/search-company/search-company.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    VideoplayerComponent,
    ControlsComponent,
    PlaylistComponent,
    LoginComponent,
    CoreComponent,
    NavigationComponent,
    HeaderComponent,
    UserSignupComponent,
    ListCompanyComponent,
    ImportExcelComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    SearchCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
