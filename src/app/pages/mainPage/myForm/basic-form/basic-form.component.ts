import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropDownDataSourceService } from '../../../../core/services/drop-down-data-source.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  validateForm: FormGroup;
  saveLoading = false;

  constructor(private fb: FormBuilder, public dropDownService: DropDownDataSourceService,
              private nzMessage: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      area: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.maxLength(40)]],
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null],
      remark: [null]
    });
  }

  checkValid(): boolean {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    return this.validateForm.valid;
  }

  clickSave() {
    if (this.checkValid()) {
      this.saveLoading = true;
      setTimeout(() => {
        this.saveLoading = false;
        this.resetForm(true);
        this.nzMessage.success('已保存!');
      }, 1000);
    }
  }

  resetForm(deepClear = false) {
    if (deepClear) {
      this.validateForm.markAsUntouched();
      this.validateForm.markAsPristine();
    }
    this.validateForm.setValue({
      userName: null,
      area: null,
      address: null,
      email: null,
      password: null,
      checkPassword: null,
      phoneNumberPrefix: this.validateForm.controls['phoneNumberPrefix'].value,
      phoneNumber: null,
      website: null,
      remark: null
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  };

}
