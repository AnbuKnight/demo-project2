import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [     
        DashboardComponent
    ],
    imports: [
        RouterModule
    ],
    providers: [],
    bootstrap: []
  })
  export class DashboardModule { }