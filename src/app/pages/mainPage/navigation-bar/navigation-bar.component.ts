import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from '../../../core/services/navigation-bar.service';
import { MenuBarService } from '../../../core/services/menu-bar.service';
import { Router } from '@angular/router';
import { RouteTabReuseStrategy } from '../../../core/RouteReuseStrategy';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  drawVisible = false;
  addingTodo = false;


  constructor(public navigationBarService: NavigationBarService,
              public menuService: MenuBarService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  routerLinkChange(index) {
    this.router.navigateByUrl(this.navigationBarService.tabs[index].routerLink);
  }

  logout() {
    RouteTabReuseStrategy.clearAllReuseRoute();
    this.router.navigateByUrl('/login').then(() => {
      this.navigationBarService.initTab();
    });
  }

}
