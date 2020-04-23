import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart1RoutingModule } from './chart1-routing.module';
import { Chart1Component } from './chart1.component';
import { ShareModule } from '../../../../share/share.module';


@NgModule({
  declarations: [Chart1Component],
  imports: [
    CommonModule,
    ShareModule,
    Chart1RoutingModule
  ]
})
export class Chart1Module {
}
