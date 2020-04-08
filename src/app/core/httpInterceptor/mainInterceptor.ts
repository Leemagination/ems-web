import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpResponseBase
} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable({providedIn: 'root'})
export class MainInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((res: any) => {
        if (res instanceof HttpResponse) {
          console.log(req.url);
          /*        if (req.url.indexOf('404')) {
                    throwError(res);
                  }*/
        }
        return of(res);
      }),
      catchError((res: HttpErrorResponse) => {
        if (res instanceof HttpErrorResponse) {
          return throwError(res);
        }
        return of(res) as Observable<any>;
      }));
  }
}
