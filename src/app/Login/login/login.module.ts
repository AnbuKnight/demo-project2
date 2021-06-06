import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [     
      LoginComponent
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,        
        MatIconModule,        
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,        
    ],
    providers: [],
    bootstrap: []
  })
  export class LoginModule { }