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
    SearchExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StorageService, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
