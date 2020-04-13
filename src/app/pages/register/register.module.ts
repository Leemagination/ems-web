import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ShareModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule {
}
