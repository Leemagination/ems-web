import { Injectable } from '@angular/core';

const chinaAreaData = require('./../../../assets/json/chinaAreaData.json');

@Injectable({
  providedIn: 'root'
})
export class DropDownDataSourceService {
  public chinaArea = [];

  constructor() {
    this.chinaArea = this.getChildArea('86');
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
        obj['children'] = children;
      } else {
        obj['isLeaf'] = true;
      }
      arr.push(obj);
    }
    return arr;
  }
}
