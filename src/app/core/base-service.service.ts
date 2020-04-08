import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.baseUrl;
const testApi = {
  key1: '@string(4,15)',
  key2: '@integer(0,1000)',
  key3: '@boolean()',
  key4: '@cname()',
  key5: {
    test1: '123',
    test2: 456,
    test3: true,
    test4: [1, 2, '4', '爱爱爱']
  }
};

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   url = `http://172.16.11.39:9696/wsp/sys/wsp-authority/findMenu`;
   url2 = `http://172.16.11.39:9696/testApi`;
   url3 = `http://test/testApi404`;
  constructor(private http: HttpClient) {
  }

  public getMethod() {
    return this.http.get(this.url2, {withCredentials: true});
  }

  public getMethod2() {
    return this.http.get(this.url, {withCredentials: true});
  }


  public getMethod3() {
    return this.http.get(this.url3, {withCredentials: true});
  }
}
