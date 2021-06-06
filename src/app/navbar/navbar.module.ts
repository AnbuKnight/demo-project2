import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [     
        NavbarComponent
    ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,        
        RouterModule,
        FlexLayoutModule        
    ],
    providers: [],
    bootstrap: []
  })
  export class NavbarModule { }