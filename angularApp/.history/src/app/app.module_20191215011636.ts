import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCompanyComponent } from './core/manage-company/edit-company/edit-company.component';
import { CreateCompanyComponent } from './core/manage-company/create-company/create-company.component';
import { CreateExchangeComponent } from './core/manage-exchange/create-exchange/create-exchange.component';
import { EditExchangeComponent } from './core/manage-exchange/edit-exchange/edit-exchange.component';
import { SearchExchangeComponent } from './core/manage-exchange/search-exchange/search-exchange.component';
import { LocalService } from './auth/local.service';
import { ManageUserComponent } from './core/manage-user/manage-user.component';
import { SearchUserComponent } from './core/manage-user/search-user/search-user.component';
import { EditUserComponent } from './core/manage-user/edit-user/edit-user.component';
import { ListIPOComponent } from './core/list-ipo/list-ipo.component';
import { CompareSectorsComponent } from './core/compare-sectors/compare-sectors.component';
import { ChartCompanyComponent } from './core/manage-company/chart-company/chart-company.component';
import { SectorManageComponent } from './core/sector-manage/sector-manage.component';
import { SearchSectorComponent } from './core/sector-manage/search-sector/search-sector.component';
import { CreateSectorComponent } from './core/sector-manage/create-sector/create-sector.component';
import { EditSectorComponent } from './core/sector-manage/edit-sector/edit-sector.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
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
    SearchCompanyComponent,
    EditCompanyComponent,
    CreateCompanyComponent,
    CreateExchangeComponent,
    EditExchangeComponent,
    SearchExchangeComponent,
    ManageUserComponent,
    SearchUserComponent,
    EditUserComponent,
    ListIPOComponent,
    CompareSectorsComponent,
    ChartCompanyComponent,
    SectorManageComponent,
    SearchSectorComponent,
    CreateSectorComponent,
    EditSectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [StorageService, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
