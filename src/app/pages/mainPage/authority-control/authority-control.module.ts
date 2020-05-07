import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorityControlRoutingModule } from './authority-control-routing.module';
import { AuthorityControlComponent } from './authority-control.component';
import { ShareModule } from '../../../share/share.module';


@NgModule({
  declarations: [AuthorityControlComponent],
  imports: [
    CommonModule,
    ShareModule,
    AuthorityControlRoutingModule
  ]
})
export class AuthorityControlModule {
}
