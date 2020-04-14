import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {ShareModule} from '../../share/share.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [MainPageComponent, NavigationBarComponent, MenuBarComponent, HomePageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ShareModule
  ]
})
export class MainPageModule { }
