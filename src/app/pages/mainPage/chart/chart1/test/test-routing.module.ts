import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComComponent } from './test-com/test-com.component';


const routes: Routes = [{
  path: '', component: TestComComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
