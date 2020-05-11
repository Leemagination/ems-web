import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from '../../../core/services/navigation-bar.service';
import { MenuBarService } from '../../../core/services/menu-bar.service';
import { Router } from '@angular/router';
import { BaseService } from '../../../core/base-service.service';

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
              private router: Router,
              private baseService: BaseService
  ) {
  }

  ngOnInit(): void {
  }

  routerLinkChange(index) {
      this.router.navigateByUrl(this.navigationBarService.tabs[index].routerLink);
  }

  logout() {
    this.baseService.logout();
  }

}
