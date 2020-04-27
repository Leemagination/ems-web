import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabChangeRoutingModule } from './tab-change-routing.module';
import { TabChangeComponent } from './tab-change.component';


@NgModule({
  declarations: [TabChangeComponent],
  imports: [
    CommonModule,
    TabChangeRoutingModule
  ]
})
export class TabChangeModule { }
