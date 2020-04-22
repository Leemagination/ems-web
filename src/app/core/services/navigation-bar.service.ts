import { Injectable } from '@angular/core';
import { MenuBarService } from './menu-bar.service';
import { ActivatedRoute, Router } from '@angular/router';

interface NavigationTab {
  tabTitle: string;
  routerLink?: string;
  closeable: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  public tabs: NavigationTab[] = [
    {tabTitle: '首页', routerLink: '/home', closeable: false}
  ];
  public tabIndex = 0;

  constructor(private menuService: MenuBarService, private router: Router) {

  }

  addTab(tab: NavigationTab, redirectNewTab = true): void {
    if (!tab) {
      return;
    }
    this.tabs.push({tabTitle: tab.tabTitle, routerLink: tab.routerLink, closeable: tab.closeable});
    if (redirectNewTab) {
      this.changeTab(this.tabs.length - 1);
    }
  }

  removeTab(tabIndex: number): void {
    this.tabs = this.tabs.filter((item, index) => {
      return tabIndex !== index;
    });
  }

  changeTab(tabIndex: number): void {
    if (tabIndex >= 0 && tabIndex < this.tabs.length) {
      this.tabIndex = tabIndex;
    }
  }

  findTabIndexByUrl(url: string, addNewTab = false): number {
    if (!url) {
      return -1;
    }
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].routerLink === url) {
        if (addNewTab) {
          this.changeTab(i);
        }
        return i;
      }
    }
    if (addNewTab) {
      this.addTab(this.findMenuByUrl(url));
    }
    return -1;
  }

  findMenuByUrl(url: string): NavigationTab {
    if (!url) {
      return null;
    }
    const menu = this.menuService.findMenuByUrl(url);
    if (!menu) {
      console.error(`菜单栏不存在${url}路径!`)
      this.router.navigateByUrl('/home');
      return;
    }
    return {
      tabTitle: menu.menuTitle,
      routerLink: menu.routerLink,
      closeable: true
    };
  }

}
