import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './Login/login/login.component';
import {Screen1Component} from './screen1/screen1.component';
import {Screen2Component} from './screen2/screen2.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'screen1', component: Screen1Component},
  {path: 'contact', component: Screen2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
