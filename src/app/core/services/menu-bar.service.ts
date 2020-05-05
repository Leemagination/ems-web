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
      icon: 'bar-chart',
      subMenu: [
        {menuTitle: '图表页', routerLink: '/chart1'},
       /* {menuTitle: '图表页2', routerLink: '/chart2'}*/
      ]
    },
    {
      menuTitle: '表格',
      icon: 'table',
      subMenu: [
        {menuTitle: '基础表格页', routerLink: '/basicTable'},
        {menuTitle: '复杂表格页', routerLink: '/complexTable'},
      ]
    },
    {
      menuTitle: '表单',
      icon: 'snippets',
      subMenu: [
        {menuTitle: '基础表单', routerLink: '/basicForm'},
        {menuTitle: '分步表单', routerLink: '/stepForm'}
      ]
    },
    {
      menuTitle: '功能演示',
      icon: 'appstore',
      subMenu: [
        {menuTitle: '权限控制', icon: 'exclamation-circle', routerLink: '/authorityControl'},
        {menuTitle: '错误处理', icon: 'warning', routerLink: '/handleError'},
        {menuTitle: '打印', icon: 'printer', routerLink: '/print'},
        {menuTitle: '下载', icon: 'download', routerLink: '/download'},
        {menuTitle: '页面跳转', icon: 'swap', routerLink: '/tabChange'},
        {menuTitle: 'iframe展示', icon: 'taobao-circle', routerLink: '/iframe'},
      ]
    },

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
