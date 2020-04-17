import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../../core/services/menu-bar.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  /*
  * https://github.com/angular/angular/issues/14842
  * 创建组件解决菜单递归padding-left的自动计算问题
  * */
  @Input() menuItem: MenuItem;
  constructor() {
  }

  ngOnInit(): void {
  }


}
