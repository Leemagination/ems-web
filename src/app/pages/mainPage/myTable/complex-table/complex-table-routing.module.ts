import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexTableComponent } from './complex-table.component';


const routes: Routes = [{
  path: '', component: ComplexTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexTableRoutingModule {
}
