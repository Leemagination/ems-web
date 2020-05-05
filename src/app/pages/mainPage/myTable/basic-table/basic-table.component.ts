import { Component, OnInit } from '@angular/core';
import { SearchParams } from './searchParams';
import Mock from 'mockjs';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  searchParams = new SearchParams();
  dataSet = [];

  constructor() {
    this.dataSet = this.mockData();
  }

  ngOnInit(): void {
  }

  mockData(params?) {
    const mockObj = {
      'name': '@cname',
      'age': '@integer(18,55)',
      'address': '@county(true)',
      'telephone': '@integer(13300000000,18899999999)',
      'entryDate': '@date',
      'remark': '@csentence()'
    };
    if (params) {
      for (const prop in mockObj) {
        if (params[prop] && prop !== 'entryDate') {
          mockObj[prop] = params[prop];
        }
      }
    }
    return Mock.mock({'array|40-70': [mockObj]}).array;
  }

  search() {
    const params = this.searchParams.getParams();
    this.dataSet = this.mockData(params);
  }

  reset() {
    this.searchParams.reset();
  }
}
