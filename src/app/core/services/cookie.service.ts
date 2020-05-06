import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  /***
   *读取指定的Cookie值 readCookie("id");
   *@param {string} cookieName Cookie名称
   */
  getCookie(cookieName: string) {
    let arr;
    const reg = new RegExp('(^| )' + cookieName + '=([^;]*)(;|$)');
    arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  /***
   * 设置Cookie值 setCookie("id",1);
   * @param {string} cookieName Cookie名称
   * @param {string} cookieValue Cookie值
   * @param {number} day Cookie过期天数
   */
  setCookie(cookieName: string, cookieValue: string, day = 1) {
    const exp: any = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = cookieName + '=' + escape(cookieValue) + ';expires=' + exp.toGMTString();
  }

  /***
   * 删除cookie中指定变量函数
   * @param {string} $name Cookie名称
   */
  deleteCookie(cookieName: string) {
    const exp: any = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(cookieName);
    if (cval != null) {
      document.cookie = cookieName + '=' + cval + ';expires=' + exp.toGMTString();
    }
  }

  /***
   * 删除cookie中所有定变量函数
   * @param {string} cookieName Cookie名称
   * @param {string} cookieValue Cookie值
   * @param {number} nDays Cookie过期天数
   */
  clearCookie() {
    const myDate: any = new Date();
    myDate.setTime(-1000);//设置时间
    const data = document.cookie;
    const dataArray = data.split('; ');
    for (let i = 0; i < dataArray.length; i++) {
      const letName = dataArray[i].split('=');
      document.cookie = letName[0] + '=\'\'; expires=' + myDate.toGMTString();
    }
  }
}
