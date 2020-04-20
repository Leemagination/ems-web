import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComComponent } from './test-com/test-com.component';


@NgModule({
  declarations: [TestComComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
