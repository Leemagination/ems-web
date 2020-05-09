import { Component, OnInit, Input } from '@angular/core';
import { DropDownDataSourceService } from '../../../../../core/services/drop-down-data-source.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { hashFnv32a } from 'src/app/share/function/hashUtil';
import { CookieService } from 'src/app/core/services/cookie.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  validateForm: FormGroup;
  @Input() editData: any;
  constructor(public dropDownService: DropDownDataSourceService, private fb: FormBuilder,
              private nzMessage: NzMessageService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    let form: any;
    if (this.editData) {
      form = {
        orderID: [this.editData.orderID],
        createName: [this.editData.createName],
        createDate: [this.editData.createDate],
        area: [this.editData.area, [Validators.required]],
        status: [this.editData.status],
        orderType: [this.editData.orderType, [Validators.required]],
        deliverStorage: [this.editData.deliverStorage, [Validators.required]],
        address: [this.editData.address, [Validators.required, Validators.maxLength(40)]],
        remark: [this.editData.remark]
      }
    } else {
      form = {
        area: [null, [Validators.required]],
        status: [false],
        orderType: [null, [Validators.required]],
        deliverStorage: [null, [Validators.required]],
        address: [null, [Validators.required, Validators.maxLength(40)]],
        remark: [null]
      }
    }
    this.validateForm = this.fb.group(form);
  }


  getParams() {
    if (this.checkValid()) {
      const params = this.validateForm.value;
      if (!this.editData) {
        params['orderID'] = hashFnv32a(new Date().getTime().toString()).toString();
        params['createName'] = JSON.parse(this.cookieService.getCookie('Authorization')).userName;
        params['createDate'] = new Date();
        let mockData = JSON.parse(localStorage.getItem('tableMockData'));
        if (mockData) {
          mockData = [...mockData, params];
          localStorage.setItem('tableMockData', JSON.stringify(mockData));
        } else {
          localStorage.setItem('tableMockData', JSON.stringify([params]));
        }
      } else {
        const mockData = JSON.parse(localStorage.getItem('tableMockData'));
        let i;
        for (i = 0; i < mockData.length; i++) {
          if (mockData[i].orderID === this.editData['orderID']) {
            break;
          }
        }
        if (i < mockData.length) {
          mockData[i] = this.validateForm.value;
          mockData[i]['modifyName'] = JSON.parse(this.cookieService.getCookie('Authorization')).userName;
          mockData[i]['modifyDate'] = new Date();
          localStorage.setItem('tableMockData', JSON.stringify(mockData));
        }
      }
      this.nzMessage.success(`${this.editData ? '编辑' : '新增'}成功!`);
      return true;
    }
    return false;
  }


  checkValid(): boolean {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    return this.validateForm.valid;
  }
}
