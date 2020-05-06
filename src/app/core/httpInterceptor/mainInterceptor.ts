import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { CookieService } from '../services/cookie.service';
import { Router } from '@angular/router';
import { BaseService } from '../base-service.service';


/** Pass untouched request through to the next request handler. */
@Injectable({providedIn: 'root'})
export class MainInterceptor implements HttpInterceptor {
  constructor(private nzNotification: NzNotificationService, private cookieService: CookieService,
              private baseService: BaseService,
              private router: Router, private nzModal: NzModalService) {
  }

  handleErrorResponse(res: HttpErrorResponse) {

    switch (res.status) {
      case 401:
        this.nzModal.error({
          nzTitle: '<i>登录失效</i>',
          nzContent: '<b>用户登录信息过期,请重新登录!</b>',
          nzOnOk: () => {
            this.baseService.logout();
          }
        });
        break;
      case 403:
        this.nzNotification.error('请求错误-403', `无权限执行该操作`);
        break;
      case 404:
        this.nzNotification.error('请求错误-404', `请求链接无效`);
        break;
      case 500:
        this.nzNotification.error('请求错误-500', `服务器内部错误`);
        break;
      default:
        this.nzNotification.error('请求错误', `错误代码:${res.status}<br>错误信息:${res.message}`);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(mergeMap((res: any) => {
        if (res instanceof HttpResponse) {
        }
        return of(res);
      }),
      catchError((res: any) => {
        if (res instanceof HttpErrorResponse) {
          this.handleErrorResponse(res);
          return throwError(res);
        }
        return throwError(res) as Observable<any>;
      }));
  }
}
