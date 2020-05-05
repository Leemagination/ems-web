import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IframeRoutingModule } from './iframe-routing.module';
import { IframeComponent } from './iframe.component';


@NgModule({
  declarations: [IframeComponent],
  imports: [
    CommonModule,
    IframeRoutingModule
  ]
})
export class IframeModule { }
