import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorityControlComponent } from './authority-control.component';


const routes: Routes = [{
  path: '', component: AuthorityControlComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorityControlRoutingModule {
}
