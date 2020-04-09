import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpResponseBase
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NzNotificationService } from 'ng-zorro-antd';

const BASE_URL = environment.baseUrl;

/** Pass untouched request through to the next request handler. */
@Injectable({providedIn: 'root'})
export class MainInterceptor implements HttpInterceptor {
  constructor(private nzNotification: NzNotificationService) {
  }

  hanldeErrorResponse(res: HttpErrorResponse) {

    switch (res.status) {
      case 401:
        this.nzNotification.error('请求错误', `用户信息过期,请重新登录`);
        break;
      case 403:
        this.nzNotification.error('请求错误', `无权限执行该操作`);
        break;
      case 404:
        this.nzNotification.error('请求错误', `请求链接无效`);
        break;
      case 500:
        this.nzNotification.error('请求错误', `服务器内部错误`);
        break;
      default:
        this.nzNotification.error('请求错误', `错误代码:${res.status}<br>错误信息:${res.message}`);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((res: any) => {
        if (res instanceof HttpResponse) {
        }
        return of(res);
      }),
      catchError((res: any) => {
        if (res instanceof HttpErrorResponse) {
          this.hanldeErrorResponse(res);
          return throwError(res);
        }
        return throwError(res) as Observable<any>;
      }));
  }
}
