import { Injectable } from '@angular/core';

const chinaAreaData = require('./../../../assets/json/chinaAreaData.json');

@Injectable({
  providedIn: 'root'
})
export class DropDownDataSourceService {
  public chinaArea = [];
  public orderType = [
    {label: '发货单', value: '发货单'},
    {label: '退货单', value: '退货单'},
    {label: '入库单', value: '入库单'},
    {label: '出库单', value: '出库单'},
    {label: '转仓单', value: '转仓单'}
  ];
  public deliverStorage = [];

  constructor() {
    this.chinaArea = this.getChildArea('86');
    this.getDeliverStorage();
  }

  getDeliverStorage() {
    const mockData = JSON.parse(localStorage.getItem('deliverStorageMockData'));
    if (mockData) {
      this.deliverStorage = mockData.map(item => {
        return {
          label: item.address,
          value: item.address
        };
      });
    }
  }

  getChildArea(areaCode) {
    if (!chinaAreaData[areaCode]) {
      return null;
    }
    const arr = [];
    for (const key in chinaAreaData[areaCode]) {
      const children = this.getChildArea(key);
      const obj = {
        value: key,
        label: chinaAreaData[areaCode][key]
      };
      if (children) {
     /*    if (chinaAreaData[areaCode][key] === '市辖区') {
          return children;
        } */
        obj['children'] = children;
      } else {
        obj['isLeaf'] = true;
      }
      arr.push(obj);
    }
    return arr;
  }
}
