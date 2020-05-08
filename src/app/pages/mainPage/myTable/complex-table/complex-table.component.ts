import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../basic-table/searchParams';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { AddModalComponent } from './add-modal/add-modal.component';
import { DeliverModalComponent } from './deliver-modal/deliver-modal.component';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss']
})
export class ComplexTableComponent implements OnInit {

  searchParams = new SearchParams();
  dataSet = [];

  constructor(private nzModalService: NzModalService, private nzMessage: NzMessageService) {
    const mockData = JSON.parse(localStorage.getItem('tableMockData'));
    if (mockData) {
      this.dataSet = mockData;
    }
  }

  ngOnInit(): void {
  }


  search() {
    const params = this.searchParams.getParams();
  }

  reset() {
    this.searchParams.reset();
  }

  openAddModal() {
    this.nzModalService.create({
      nzTitle: '新增',
      nzContent: AddModalComponent,
      nzMaskClosable: false,
      nzOnOk: (componentRef) => {
        if (componentRef.getParams()) {
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

}
