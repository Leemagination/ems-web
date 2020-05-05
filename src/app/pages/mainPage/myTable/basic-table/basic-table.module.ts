import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTableRoutingModule } from './basic-table-routing.module';
import { BasicTableComponent } from './basic-table.component';
import { ShareModule } from '../../../../share/share.module';


@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    ShareModule,
    BasicTableRoutingModule
  ]
})
export class BasicTableModule {
}
