import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandleErrorRoutingModule } from './handle-error-routing.module';
import { HandleErrorComponent } from './handle-error.component';


@NgModule({
  declarations: [HandleErrorComponent],
  imports: [
    CommonModule,
    HandleErrorRoutingModule
  ]
})
export class HandleErrorModule { }
