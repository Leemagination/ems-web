import { Injectable } from '@angular/core';

interface NavigationTab {
  tabTitle: string;
  routerLink?: string;
}

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  public tabs: NavigationTab[] = [{tabTitle: 'tab1'}, {tabTitle: 'tab2'}, {tabTitle: 'tab3'}];
  public tabIndex = 0;

  constructor() {
  }

  addTab(redirectNewTab = true): void {
    this.tabs.push({tabTitle: 'NewTab'});
    if (redirectNewTab) {
      this.changeTab(this.tabs.length - 1);
    }
  }

  removeTab(tabIndex): void {
    this.tabs = this.tabs.filter((item, index) => {
      return tabIndex !== index;
    });
  }

  changeTab(tabIndex): void {
    if (tabIndex >= 0 && tabIndex < this.tabs.length) {
      this.tabIndex = tabIndex;
    }
  }


}
