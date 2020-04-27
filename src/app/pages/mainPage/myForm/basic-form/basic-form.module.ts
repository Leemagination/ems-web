import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form.component';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    BasicFormRoutingModule
  ]
})
export class BasicFormModule { }
