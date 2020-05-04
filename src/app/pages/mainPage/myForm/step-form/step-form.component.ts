import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {
  stepIndex = 0;
  validateForm1: FormGroup;
  validateForm2: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private nzMessage: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm1 = this.fb.group({
      payAccount: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
      receiptAccount: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
      receiptName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      receiptType: ['银行卡'],
      money: [null, [Validators.required, Validators.pattern(/^([1-9]\d{0,9}|0)(\.\d{1,})?$/)]],
    });
    this.validateForm2 = this.fb.group({
      payPassword: [null, [Validators.required]],
    });
  }

  previousStep() {
    this.stepIndex--;
  }


  nextStep(index) {
    if (this.checkValid(index)) {
      if (index === 2) {
        this.loading = true;
        setTimeout(() => {
          this.stepIndex++;
          this.loading = false;
        }, 500);
      } else {
        this.stepIndex++;
      }
    }
  }


  checkValid(index): boolean {
    for (const i in this[`validateForm${index}`].controls) {
      this[`validateForm${index}`].controls[i].markAsDirty();
      this[`validateForm${index}`].controls[i].updateValueAndValidity();
    }

    return this[`validateForm${index}`].valid;
  }

  transferAgain() {
    this.validateForm1.markAsUntouched();
    this.validateForm1.markAsPristine();
    this.validateForm2.markAsUntouched();
    this.validateForm2.markAsPristine();
    this.validateForm1.setValue({
      payAccount: null,
      receiptAccount: null,
      receiptName: null,
      receiptType: this.validateForm1.controls['receiptType'].value,
      money: null,
    });
    this.validateForm2.setValue({
      payPassword: null
    });
    this.stepIndex = 0;
  }

}
