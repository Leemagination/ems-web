import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard } from './core/routerGuard/logged-guard.service';


const routes: Routes = [
  {
    path: 'login',
    data: {reuseRoute: false},
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    data: {reuseRoute: false},
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/mainPage/main-page.module').then(m => m.MainPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
