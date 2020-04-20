import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chart1Component } from './chart1.component';


const routes: Routes = [{
  path: '', component: Chart1Component,
  children: [{path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)}]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chart1RoutingModule {
}
