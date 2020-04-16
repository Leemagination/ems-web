import { Component, OnInit } from '@angular/core';
import { MenuBarService } from '../../../core/services/menu-bar.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isCollapsed = true;

  constructor(public menuService: MenuBarService) {
  }

  ngOnInit(): void {
  }

}
