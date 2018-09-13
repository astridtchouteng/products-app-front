import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductAddGuard implements CanActivate {

  constructor(private router: Router, private _service: AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> Voici mon subject :' + this.getJwtSubjet());
   if (localStorage.getItem('currentUser') && ( this.getJwtSubjet() === 'admin')) {
     // logged in so return true
     return true;
   }

   // not logged in so redirect to login page with the return url
   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
   return false;
 }

 getJwtSubjet(): string {
   return this._service.getJwtSubjet();
}
}
