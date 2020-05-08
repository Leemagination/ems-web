import { Component, OnInit } from '@angular/core';
import { DropDownDataSourceService } from '../../../../../core/services/drop-down-data-source.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  validateForm: FormGroup;

  constructor(public dropDownService: DropDownDataSourceService, private fb: FormBuilder, private nzMessage: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      area: [null, [Validators.required]],
      status: [false],
      orderType: [null, [Validators.required]],
      deliverStorage: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.maxLength(40)]],
      remark: [null]
    });
  }


  getParams() {
    if (this.checkValid()) {
      let mockData = JSON.parse(localStorage.getItem('tableMockData'));
      if (mockData) {
        mockData = [...mockData, this.validateForm.value];
        localStorage.setItem('tableMockData', JSON.stringify(mockData));
      } else {
        localStorage.setItem('tableMockData', JSON.stringify([this.validateForm.value]));
      }
      this.nzMessage.success('新增成功!');
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
