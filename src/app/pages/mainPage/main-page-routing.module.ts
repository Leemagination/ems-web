import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedGuard } from '../../core/routerGuard/logged-guard.service';


const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  canActivate: [LoggedGuard],
  canActivateChild: [LoggedGuard],
  children: [
    {path: 'home', component: HomePageComponent},
    {path: 'chart1', loadChildren: () => import('./chart/chart1/chart1.module').then(m => m.Chart1Module)},
    {path: 'chart2', loadChildren: () => import('./chart/chart2/chart2.module').then(m => m.Chart2Module)},
    {path: 'basicForm', loadChildren: () => import('./myForm/basic-form/basic-form.module').then(m => m.BasicFormModule)},
    {path: 'stepForm', loadChildren: () => import('./myForm/step-form/step-form.module').then(m => m.StepFormModule)},
    {path: 'basicTable', loadChildren: () => import('./myTable/basic-table/basic-table.module').then(m => m.BasicTableModule)},
    {path: 'complexTable', loadChildren: () => import('./myTable/complex-table/complex-table.module').then(m => m.ComplexTableModule)},
    {
      path: 'authorityControl',
      loadChildren: () => import('./authority-control/authority-control.module').then(m => m.AuthorityControlModule)
    },
    {path: 'download', loadChildren: () => import('./download/download.module').then(m => m.DownloadModule)},
    {path: 'handleError', loadChildren: () => import('./handle-error/handle-error.module').then(m => m.HandleErrorModule)},
    {path: 'print', loadChildren: () => import('./print/print.module').then(m => m.PrintModule)},
    {path: 'iframe', loadChildren: () => import('./iframe/iframe.module').then(m => m.IframeModule)},
    {path: 'tabChange', loadChildren: () => import('./tab-change/tab-change.module').then(m => m.TabChangeModule)},
    {
      path: '**', redirectTo: 'home', pathMatch: 'full'
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
