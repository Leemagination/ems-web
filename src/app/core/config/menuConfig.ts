export interface MenuItem {
  menuTitle: string;
  Authorized?: boolean;
  routerLink?: string;
  icon?: string;
  subMenu?: MenuItem[];
}


export const menuConfig: MenuItem[] = [
  {
    menuTitle: '图表',
    icon: 'bar-chart',
    subMenu: [
      {menuTitle: '图表页', routerLink: '/chart1'},
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
