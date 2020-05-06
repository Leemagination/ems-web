import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandleErrorRoutingModule } from './handle-error-routing.module';
import { HandleErrorComponent } from './handle-error.component';
import { ShareModule } from '../../../share/share.module';
import { HandleErrorService } from './handle-error.service';


@NgModule({
  declarations: [HandleErrorComponent],
  imports: [
    CommonModule,
    ShareModule,
    HandleErrorRoutingModule
  ],
  providers: [HandleErrorService]
})
export class HandleErrorModule {
}
