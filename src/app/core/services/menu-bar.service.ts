import { Injectable } from '@angular/core';

export interface MenuItem {
  menuTitle: string;
  icon?: string;
  subMenu?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {
  private _isCollapsed = false;
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }

  set isCollapsed(value: boolean) {
    this._isCollapsed = value;
    document.documentElement.style.setProperty('--MenuBarWidth', this._isCollapsed ? '60px' : '200px');
  }

  public menuList: MenuItem[] = [
    {
      menuTitle: '菜单1',
      subMenu: [
        {
          menuTitle: '子菜单1', subMenu: [
            {menuTitle: '芝芝菜单1'},
            {menuTitle: '芝芝菜单2'},
            {menuTitle: '芝芝菜单3'},
          ]
        },
        {menuTitle: '子菜单2'},
        {menuTitle: '子菜单3'},
        {menuTitle: '子菜单4'}
      ]
    },
    {
      menuTitle: '菜单2',
      icon: 'question',
      subMenu: [{
        menuTitle: '啊啊啊啊啊'
      }]
    }
  ];

  constructor() {
  }

}
