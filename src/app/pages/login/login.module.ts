import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ShareModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
