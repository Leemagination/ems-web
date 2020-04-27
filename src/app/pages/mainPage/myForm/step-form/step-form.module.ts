import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepFormRoutingModule } from './step-form-routing.module';
import { StepFormComponent } from './step-form.component';


@NgModule({
  declarations: [StepFormComponent],
  imports: [
    CommonModule,
    StepFormRoutingModule
  ]
})
export class StepFormModule { }
