import { Injectable } from '@angular/core';

export interface MenuItem {
  menuTitle: string;
  routerLink?: string;
  icon?: string;
  subMenu?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {
  private COLLAPSED_WIDTH = 140;
  private _isCollapsed = false;
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }

  set isCollapsed(value: boolean) {
    const style = getComputedStyle(document.documentElement);
    const currentMenuWidth = Number(style.getPropertyValue('--MenuBarWidth').slice(0, -2));
    const menuWidth = this._isCollapsed ? currentMenuWidth + this.COLLAPSED_WIDTH : currentMenuWidth - this.COLLAPSED_WIDTH;
    this._isCollapsed = value;
    document.documentElement.style.setProperty('--MenuBarWidth', menuWidth + 'px');
  }

  public menuList: MenuItem[] = [
    {
      menuTitle: '常用菜单',
      subMenu: []
    },
    {
      menuTitle: '图表',
      icon: 'bars',
      subMenu: [
        {menuTitle: '图表1', routerLink: '/chart1'},
        {menuTitle: '图表2', routerLink: '/chart2'},
        {menuTitle: '图表3', routerLink: '/chart1/test'}
      ]
    },
    {
      menuTitle: '表格',
      icon: 'question',
      subMenu: [
        {menuTitle: '简单表格页'},
        {menuTitle: '复杂表格页'},
      ]
    },
    {
      menuTitle: '表单',
      icon: 'bars'
    },
    {
      menuTitle: '错误处理',
      icon: 'bars'
    }
  ];

  constructor() {
  }


  findMenuByUrl(url: string): MenuItem {
    return this.recursiveMenu(this.menuList, url);
  }

  recursiveMenu(menu: MenuItem[], url: string): MenuItem {
    let result = null;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].subMenu) {
        const menuItem = this.recursiveMenu(menu[i].subMenu, url);
        if (menuItem) {
          result = menuItem;
        }
      } else {
        if (menu[i].routerLink === url) {
          result = {
            menuTitle: menu[i].menuTitle,
            routerLink: menu[i].routerLink
          };
        }
      }
    }
    return result;
  }

}
