import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from '../../../core/services/navigation-bar.service';
import { MenuBarService } from '../../../core/services/menu-bar.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(public navigationBarService: NavigationBarService,
              public menuService: MenuBarService) {
  }

  ngOnInit(): void {
  }

}
