import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RouteTabReuseStrategy } from './RouteReuseStrategy';
import { CookieService } from './services/cookie.service';
import { Router } from '@angular/router';
import { NavigationBarService } from './services/navigation-bar.service';

export interface RequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient, private cookieService: CookieService,
              private router: Router,
             ) {
  }

  public get(url: string, params?: { [param: string]: any }, options?: RequestOptions): Observable<any> {
    let option = this.defaultOptions();
    if (params) {
      option.params = this.parseGetMethodParams(params);
    }
    if (options) {
      option = Object.assign(option, options);
    }
    return this.http.get(`${environment.baseUrl}${url}`, option);
  }

  public post(url: string, params?: { [param: string]: any }, options?: RequestOptions): Observable<any> {
    let option = this.defaultOptions();
    if (options) {
      option = Object.assign(option, options);
    }
    return this.http.post(`${environment.baseUrl}${url}`, params ? params : null, option);
  }


  private parseGetMethodParams(params: object): HttpParams {
    let urlParams = new HttpParams();
    if (params) {
      for (const key in params) {
        const _data = params[key];
        urlParams = urlParams.append(key, _data);
      }
    }
    return urlParams;
  }

  private defaultOptions(): {
    observe: 'response',
    reportProgress: boolean,
    withCredentials: boolean,
    params?: { [param: string]: any },
    responseType: 'json'
  } {
    return {
      observe: 'response',
      reportProgress: false,
      withCredentials: false,
      responseType: 'json'
    };
  }

  logout() {
    this.cookieService.deleteCookie('Authorization');
    RouteTabReuseStrategy.clearAllReuseRoute();
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }
}
