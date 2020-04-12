import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestModuleComponent } from './test-module.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [TestModuleComponent],
  imports: [
    CommonModule,
    ShareModule,
    TestModuleRoutingModule
  ]
})
export class TestModuleModule { }
