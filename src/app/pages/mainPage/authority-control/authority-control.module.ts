import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorityControlRoutingModule } from './authority-control-routing.module';
import { AuthorityControlComponent } from './authority-control.component';


@NgModule({
  declarations: [AuthorityControlComponent],
  imports: [
    CommonModule,
    AuthorityControlRoutingModule
  ]
})
export class AuthorityControlModule { }
