import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table.component';


const routes: Routes = [{
  path: '', component: BasicTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTableRoutingModule {
}
