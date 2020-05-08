import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-deliver-modal',
  templateUrl: './deliver-modal.component.html',
  styleUrls: ['./deliver-modal.component.scss']
})
export class DeliverModalComponent implements OnInit {
  dataSet = [];

  constructor(private nzMessage: NzMessageService) {
    const mockData = JSON.parse(localStorage.getItem('deliverStorageMockData'));
    if (mockData) {
      this.dataSet = mockData;
    }
  }

  ngOnInit(): void {

  }

  addNewDeliver() {
    this.dataSet = [...this.dataSet, {
      address: null,
      editable: true
    }];
  }

  deleteDeliver(index) {
    this.dataSet = this.dataSet.filter((item, i) => {
      return index !== i;
    });
  }

  getParams() {
    if (this.dataSet.some(item => item.editable)) {
      this.nzMessage.warning('请先编辑完成表格中的发货仓!');
      return false;
    }
    this.nzMessage.success('保存成功!');
    localStorage.setItem('deliverStorageMockData', JSON.stringify(this.dataSet));
    return true;
  }

}
