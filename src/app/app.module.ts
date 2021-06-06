import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from './Login/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';
// import { NavbarModule } from './navbar/navbar.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NavbarComponent} from './navbar/navbar.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

@NgModule({
  declarations: [
    AppComponent
    , NavbarComponent, Screen1Component, Screen2Component   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    DashboardModule,
    // NavbarModule
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
