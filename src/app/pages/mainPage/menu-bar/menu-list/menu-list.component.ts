import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../../core/services/menu-bar.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
