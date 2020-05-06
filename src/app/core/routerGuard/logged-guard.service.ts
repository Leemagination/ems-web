import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { BaseService } from '../base-service.service';

@Injectable()
export class LoggedGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router, private baseService: BaseService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (this.cookieService.getCookie('Authorization')) {
      return true;
    } else {
      this.baseService.logout();
      return false;
    }

  }
}
