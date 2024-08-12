import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalVars } from './common/common';

@Injectable({providedIn: 'root'})
export class AuthGuard  {
  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    GlobalVars.userid = localStorage.getItem('userid') ?? '';
    if (!GlobalVars.userid) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
