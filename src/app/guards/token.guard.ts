import { PROFILE } from '../enums/profiles';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private router: Router, private activated: ActivatedRoute) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const credential = JSON.parse(localStorage.getItem('token'));
    if (!credential) {
    this.router.navigate(['/login/']);
    return false;
    } else {
      if (route.data.role === credential.role) {

        return true;
      } else {
        this.router.navigate(['/Unauthorized/']);
        return false;
      }

    }


  }

  formatRole(role: string): string {
    return role.replace('[', '').replace(']', '');
  }

}
