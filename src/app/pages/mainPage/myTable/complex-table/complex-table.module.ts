import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexTableRoutingModule } from './complex-table-routing.module';
import { ComplexTableComponent } from './complex-table.component';
import { ShareModule } from '../../../../share/share.module';
import { AddModalComponent } from './add-modal/add-modal.component';
import { DeliverModalComponent } from './deliver-modal/deliver-modal.component';


@NgModule({
  declarations: [ComplexTableComponent, AddModalComponent, DeliverModalComponent],
  imports: [
    CommonModule,
    ShareModule,
    ComplexTableRoutingModule
  ],
  entryComponents: [AddModalComponent, DeliverModalComponent]
})
export class ComplexTableModule {
}
