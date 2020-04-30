import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepFormRoutingModule } from './step-form-routing.module';
import { StepFormComponent } from './step-form.component';
import { ShareModule } from '../../../../share/share.module';


@NgModule({
  declarations: [StepFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    StepFormRoutingModule
  ]
})
export class StepFormModule {
}
