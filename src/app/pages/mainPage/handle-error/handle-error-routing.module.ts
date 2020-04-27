import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandleErrorComponent } from './handle-error.component';


const routes: Routes = [{
  path: '', component: HandleErrorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandleErrorRoutingModule {
}
