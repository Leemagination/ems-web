import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {path: 'home', component: HomePageComponent},
    {path: 'chart1', loadChildren: () => import('./chart/chart1/chart1.module').then(m => m.Chart1Module)},
    {path: 'chart2', loadChildren: () => import('./chart/chart2/chart2.module').then(m => m.Chart2Module)},
    {
      path: '**', redirectTo: 'home', pathMatch: 'full'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
