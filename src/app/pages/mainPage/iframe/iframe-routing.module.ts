import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IframeComponent } from './iframe.component';


const routes: Routes = [{
  path: '', component: IframeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IframeRoutingModule {
}
