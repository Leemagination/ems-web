import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFormRoutingModule } from './basic-form-routing.module';
import { BasicFormComponent } from './basic-form.component';
import { ShareModule } from '../../../../share/share.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    BasicFormRoutingModule
  ]
})
export class BasicFormModule { }
