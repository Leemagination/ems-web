import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { BaseService } from '../base-service.service';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class LoggedGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private cookieService: CookieService, private router: Router, private baseService: BaseService, private nzModal: NzModalService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.cookieValid();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.cookieValid();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.cookieValid();
  }

  cookieValid(): boolean {
    if (this.cookieService.getCookie('Authorization')) {
      return true;
    } else {
      this.nzModal.error({
        nzTitle: '<i>登录失效</i>',
        nzContent: '<b>用户登录信息过期,请重新登录!</b>',
        nzOnOk: () => {
          this.baseService.logout();
        }
      });
      return false;
    }
  }
}
