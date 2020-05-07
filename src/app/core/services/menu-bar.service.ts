import { Injectable } from '@angular/core';
import { menuConfig, MenuItem } from '../config/menuConfig';


@Injectable({
  providedIn: 'root'
})
export class MenuBarService {
  private COLLAPSED_WIDTH = 140;
  private _isCollapsed = false;
  private roleType = ['administrators'];
  public menuPermission;

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

  public menuList: MenuItem[] = [];

  constructor() {
    this.loadPermission();
  }

  loadPermission() {//模拟后端权限数据
    const role = JSON.parse(localStorage.getItem('currentUserRole'));
    this.roleType = role ? role : ['administrators'];
    this.menuPermission = {};
    this.roleType.forEach(type => {
      let permission;
      switch (type) {
        case 'administrators':
          permission = JSON.parse(JSON.stringify(require('../../../../mock/adminAuthority.json')));
          break;
        case 'certainRoleA':
          permission = JSON.parse(JSON.stringify(require('../../../../mock/roleAAuthority.json')));
          break;
        case 'certainRoleB':
          permission = JSON.parse(JSON.stringify(require('../../../../mock/roleBAuthority.json')));
          break;
        case 'guest':
          permission = JSON.parse(JSON.stringify(require('../../../../mock/guestAuthority.json')));
          break;
      }
      for (const prop in permission) {
        if (this.menuPermission[prop]) {
          permission[prop].buttons = Array.from(new Set([...permission[prop].buttons, ...this.menuPermission[prop].buttons]));
        }
      }
      this.menuPermission = Object.assign(this.menuPermission, permission);
    });
    const config = JSON.parse(JSON.stringify(menuConfig));
    this.checkMenuValid(config);
    this.menuList = config;
  }

  checkMenuValid(menu: MenuItem[]) {
    menu.forEach(item => {
      if (item.subMenu) {
        item.subMenu = item.subMenu.filter(list => !!this.menuPermission[list.routerLink]);
        this.checkMenuValid(item.subMenu);
      }
    });
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
