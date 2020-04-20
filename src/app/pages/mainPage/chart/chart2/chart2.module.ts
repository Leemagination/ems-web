import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart2RoutingModule } from './chart2-routing.module';
import { Chart2Component } from './chart2.component';
import { ShareModule } from '../../../../share/share.module';


@NgModule({
  declarations: [Chart2Component],
  imports: [
    CommonModule,
    ShareModule,
    Chart2RoutingModule
  ]
})
export class Chart2Module { }
