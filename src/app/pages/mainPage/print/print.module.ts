import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { ShareModule } from '../../../share/share.module';


@NgModule({
  declarations: [PrintComponent],
  imports: [
    CommonModule,
    ShareModule,
    PrintRoutingModule
  ]
})
export class PrintModule {
}
