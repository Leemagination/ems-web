import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTableRoutingModule } from './basic-table-routing.module';
import { BasicTableComponent } from './basic-table.component';


@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    BasicTableRoutingModule
  ]
})
export class BasicTableModule { }
