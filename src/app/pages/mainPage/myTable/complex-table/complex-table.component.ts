import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { AddModalComponent } from './add-modal/add-modal.component';
import { DeliverModalComponent } from './deliver-modal/deliver-modal.component';
import { DropDownDataSourceService } from 'src/app/core/services/drop-down-data-source.service';
import { SearchParams } from './searchParams';
import { formatDate } from 'src/app/share/function/dateUtil';
import { NavigationEnd, Router } from '@angular/router';

const chinaAreaData = require('src/assets/json/chinaAreaData.json');

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss']
})
export class ComplexTableComponent implements OnInit {
  searchParams = new SearchParams();
  dataSet = [];

  constructor(private nzModalService: NzModalService,
              private nzMessage: NzMessageService,
              private router: Router,
              public dropDownService: DropDownDataSourceService) {
    this.getMockData();
    this.handleTabChange();
  }

  ngOnInit(): void {

  }

  handleTabChange() {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        if (data.url.indexOf('complexTable') !== -1) {
          const index = data.url.indexOf('?');
          if (index !== -1) {
            const queryParams = data.url.slice(index + 1);
            const paramsArr = queryParams.split('&');
            const result = {};
            paramsArr.forEach(item => {
              const arr = item.split('=');
              const prop = arr[0];
              const value = arr[1];
              result[prop] = decodeURI(value);
            });
            this.searchParams.setParams(result);
            this.search();
          }
        }
      }
    });
  }

  getMockData() {
    const mockData = JSON.parse(localStorage.getItem('tableMockData'));
    if (mockData) {
      this.dataSet = mockData;
    }
  }

  search() {
    const params = this.searchParams.getParams();
    let arr = JSON.parse(localStorage.getItem('tableMockData'));
    let flag = true;
    for (const prop in params) {
      if (params[prop] !== null && params[prop] !== undefined) {
        flag = false;
        arr = arr.filter(item => {
          if (prop === 'area') {
            return JSON.stringify(item[prop]) === JSON.stringify(params[prop]);
          }
          return item[prop] === params[prop];
        });
      }
    }
    if (flag) {
      this.getMockData();
    } else {
      this.dataSet = arr;
    }

  }

  reset() {
    this.searchParams.reset();
  }

  handleDate(dateStr) {
    return formatDate(new Date(dateStr).getTime());
  }

  openAddModal(data?) {
    this.nzModalService.create({
      nzTitle: data ? '编辑' : '新增',
      nzContent: AddModalComponent,
      nzComponentParams: {
        editData: data ? data : null
      },
      nzMaskClosable: false,
      nzOnOk: (componentRef) => {
        if (componentRef.getParams()) {
          this.dataSet = JSON.parse(localStorage.getItem('tableMockData'));
          return true;
        }
        return false;
      },
      nzOnCancel: () => {

      }
    });
  }

  openDeliverModal() {
    const modal = this.nzModalService.create({
      nzTitle: '编辑发货仓',
      nzContent: DeliverModalComponent,
      nzMaskClosable: false,
      nzWidth: 600,
      nzFooter: [{
        label: '新增',
        onClick: (componentRef) => {
          componentRef.addNewDeliver();
        }
      },
        {
          label: '保存',
          type: 'primary',
          onClick: (componentRef) => {
            if (componentRef.getParams()) {
              this.dropDownService.getDeliverStorage();
              modal.destroy();
            }
          }
        },
        {
          label: '取消',
          onClick: () => {
            modal.destroy();
          }
        }
      ]
    });
  }

  statusChange(index) {
    const orderID = this.dataSet[index].orderID;
    const mockData = JSON.parse(localStorage.getItem('tableMockData'));
    let i;
    for (i = 0; i < mockData.length; i++) {
      if (mockData[i].orderID === orderID) {
        break;
      }
    }
    if (i < mockData.length) {
      mockData[i].status = !mockData[i].status;
      localStorage.setItem('tableMockData', JSON.stringify(mockData));
    }
  }


  deleteItem(index) {
    const orderID = this.dataSet[index].orderID;
    let mockData = JSON.parse(localStorage.getItem('tableMockData'));
    let i;
    for (i = 0; i < mockData.length; i++) {
      if (mockData[i].orderID === orderID) {
        break;
      }
    }
    if (i < mockData.length) {
      mockData = mockData.filter((item, order) => i !== order);
      localStorage.setItem('tableMockData', JSON.stringify(mockData));
    }
    this.dataSet = this.dataSet.filter((item, order) => order !== index);
  }

  handleAddress(area, address) {
    let result = chinaAreaData['86'][area[0]];
    if (area.length === 2) {
      result += `,${chinaAreaData[area[0]][area[1]]}`;
    }
    if (area.length === 3) {
      result += `,${chinaAreaData[area[0]][area[1]]}`;
      result += `,${chinaAreaData[area[1]][area[2]]}`;
    }
    return result + `,${address}`;
  }

}
