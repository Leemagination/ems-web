import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   url = `/delonApi1111`;
   url2 = `http://172.16.11.39:9696/testApi`;
   url3 = `/fail401`;
  constructor(private http: HttpClient) {
  }

  public getMethod() {
    return this.http.get(this.url2, {withCredentials: true});
  }

  public getMethod2() {
    return this.http.get(this.url, {withCredentials: true});
  }


  public getMethod3() {
    return this.http.get('/fail401', {withCredentials: true});
  }
  public getMethod4() {
    return this.http.get('/fail403', {withCredentials: true});
  }
  public getMethod5() {
    return this.http.get('/fail404', {withCredentials: true});
  }
  public getMethod6() {
    return this.http.get('/fail500', {withCredentials: true});
  }
}
