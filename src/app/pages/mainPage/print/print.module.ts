import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';


@NgModule({
  declarations: [PrintComponent],
  imports: [
    CommonModule,
    PrintRoutingModule
  ]
})
export class PrintModule { }
