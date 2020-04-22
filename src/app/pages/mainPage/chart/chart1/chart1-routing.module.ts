import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart1Component } from './chart1.component';


const routes: Routes = [
  {
    path: '', component: Chart1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chart1RoutingModule {
}
