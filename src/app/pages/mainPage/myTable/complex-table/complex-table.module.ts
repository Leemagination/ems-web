import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexTableRoutingModule } from './complex-table-routing.module';
import { ComplexTableComponent } from './complex-table.component';


@NgModule({
  declarations: [ComplexTableComponent],
  imports: [
    CommonModule,
    ComplexTableRoutingModule
  ]
})
export class ComplexTableModule { }
