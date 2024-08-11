import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './view-models/misc/login.service';

@Injectable({providedIn: 'root'})
export class AuthGuard  {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
