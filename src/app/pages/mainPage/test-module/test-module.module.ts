import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestModuleComponent } from './test-module.component';


@NgModule({
  declarations: [TestModuleComponent],
  imports: [
    CommonModule,
    TestModuleRoutingModule
  ]
})
export class TestModuleModule { }
