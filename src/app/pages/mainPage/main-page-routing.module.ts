import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page.component';


const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {
      path: 'testPage',
      loadChildren: () => import('./test-module/test-module.module').then(m => m.TestModuleModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
