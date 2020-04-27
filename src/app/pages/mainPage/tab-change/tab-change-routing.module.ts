import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabChangeComponent } from './tab-change.component';


const routes: Routes = [{
  path: '', component: TabChangeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabChangeRoutingModule {
}
