import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {
 
  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition 
      var var1=1;
      if (var1==2)  {
          alert('You are not allowed to view this page');
          //redirect to login/home page etc
          //return false to cancel the navigation
          return false;
      } 
      return true;
  }

}
