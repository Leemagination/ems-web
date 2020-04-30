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

  constructor(private fb: FormBuilder,
              private nzMessage: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm1 = this.fb.group({
      payAccount: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
      receiptAccount: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(26)]],
      receiptName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      receiptType: ['银行卡', [Validators.required]],
      money: [null, [Validators.required, Validators.pattern(/^([1-9]\d{0,9}|0)(\.\d{1,})?$/)]],
    });
  }

}
