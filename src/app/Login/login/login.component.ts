import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
  }

  public login()
  {
    this.loginService.validateUser(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      authenticated => {
          if (authenticated[0] !== 0) {              
              this.router.navigateByUrl('/dashboard');
          } else {
            console.log(authenticated);
            alert('User does not have access to the application');
          }
      });
  }

}
