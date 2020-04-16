import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {path: 'home', component: HomePageComponent},
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
