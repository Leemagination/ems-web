import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabChangeRoutingModule } from './tab-change-routing.module';
import { TabChangeComponent } from './tab-change.component';
import { ShareModule } from '../../../share/share.module';


@NgModule({
  declarations: [TabChangeComponent],
  imports: [
    CommonModule,
    ShareModule,
    TabChangeRoutingModule
  ]
})
export class TabChangeModule { }
