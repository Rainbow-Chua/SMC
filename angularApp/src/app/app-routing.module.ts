import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {CoreComponent} from './core/core.component';
import {ListCompanyComponent} from './core/list-company/list-company.component';
import {SearchCompanyComponent} from './core/manage-company/search-company/search-company.component';
import {ImportExcelComponent} from './core/import-excel/import-excel.component';
import {ManageExchangeComponent} from './core/manage-exchange/manage-exchange.component';
import {UpdateIPOComponent} from './core/update-ipo/update-ipo.component';
import {UserSignupComponent} from './core/user-signup/user-signup.component';
import {EditCompanyComponent} from './core/manage-company/edit-company/edit-company.component';
import {CreateCompanyComponent} from './core/manage-company/create-company/create-company.component';
import {CreateExchangeComponent} from './core/manage-exchange/create-exchange/create-exchange.component';
import {SearchExchangeComponent} from './core/manage-exchange/search-exchange/search-exchange.component';
import {EditExchangeComponent} from './core/manage-exchange/edit-exchange/edit-exchange.component';
import {HeaderComponent} from './core/navigation/header/header.component';
import {ListIPOComponent} from './core/list-ipo/list-ipo.component';
import { from } from 'rxjs';
import { ChartCompanyComponent } from './core/manage-company/chart-company/chart-company.component';
import { SearchUserComponent } from './core/manage-user/search-user/search-user.component';
import { EditUserComponent } from './core/manage-user/edit-user/edit-user.component';
import { CompareSectorsComponent } from './core/compare-sectors/compare-sectors.component';

const routes: Routes = [
  // { path: '', component: VideoplayerComponent },
  { path: '', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'signup', component: UserSignupComponent },
  {
    path: 'home', component: CoreComponent, children: [
      { path: '', component: ListCompanyComponent},
      { path: 'importData', component: ImportExcelComponent},
      { path: 'createCompany', component: CreateCompanyComponent },
      { path: 'manageCompany', component: SearchCompanyComponent},
      { path: 'editCompany/:id', component: EditCompanyComponent },
      { path: 'manageExchange', component: SearchExchangeComponent},
      { path: 'uodateIpo', component: UpdateIPOComponent},
      { path: 'createExchange', component: CreateExchangeComponent },
      { path: 'editExchange/:id', component: EditExchangeComponent },
      { path: 'IPOs', component: ListIPOComponent},
      { path: 'compareCompany', component: ChartCompanyComponent},
      { path: 'compareSectors', component: CompareSectorsComponent},
      { path: 'userEdit/:id', component: EditUserComponent},
      { path: 'userList', component: SearchUserComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
