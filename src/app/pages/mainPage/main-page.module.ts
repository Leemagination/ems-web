import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ShareModule } from '../../share/share.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuListComponent } from './menu-bar/menu-list/menu-list.component';


@NgModule({
  declarations: [MainPageComponent, NavigationBarComponent, MenuBarComponent, HomePageComponent, MenuListComponent],
  imports: [
    CommonModule,
    ShareModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule {
}
