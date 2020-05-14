import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['cn', 'en']);
    translate.setDefaultLang('cn');
    const language = localStorage.getItem('language');
    translate.use(language ? language : 'cn');
    if (!localStorage.getItem('deliverStorageMockData')) {
      localStorage.setItem('deliverStorageMockData', JSON.stringify([{address: '广州', editable: false}, {
        address: '深圳',
        editable: false
      }, {address: '上海', editable: false}, {address: '北京', editable: false}]));
    }
    if (!localStorage.getItem('tableMockData')) {
      const data = [{
        'area': ['110000', '110101'],
        'status': true,
        'orderType': '发货单',
        'deliverStorage': '广州',
        'address': '冲鸭鸭鸭鸭鸭',
        'remark': '这就是一个备注而已',
        'orderID': '123456789',
        'createName': '小李',
        'createDate': '2020-05-14T09:37:36.529Z'
      }, {
        'area': ['440000', '440100', '440111'],
        'status': false,
        'orderType': '退货单',
        'deliverStorage': '上海',
        'address': '随便填一个地址',
        'remark': '',
        'orderID': '987654321',
        'createName': '小李',
        'createDate': '2020-05-14T09:38:23.640Z'
      }, {
        'area': ['510000', '510100', '510114'],
        'status': true,
        'orderType': '出库单',
        'deliverStorage': '深圳',
        'address': 'XX区XXX路 XX 号',
        'remark': '11111',
        'orderID': '66666666',
        'createName': '小李',
        'createDate': '2020-05-14T09:39:05.076Z'
      }];
      localStorage.setItem('tableMockData', JSON.stringify(data));
    }
  }
}
