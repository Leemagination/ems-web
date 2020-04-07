import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {

  }

  public getMethod() {
    const url = `http://172.16.11.39:18201/wsp/sys/wsp-authority/findMenu`;
    const url2 = `http://172.16.11.39:18201/testApi`;

    return this.http.get(url2, {withCredentials: true});
  }
}
