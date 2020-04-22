import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from '../../../core/services/navigation-bar.service';
import { MenuBarService } from '../../../core/services/menu-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  flag = true;
  chart1Test = '';

  constructor(private navigation: NavigationBarService,
              private router: Router,
              private menuService: MenuBarService) {
  }

  ngOnInit(): void {
  }

  test() {
    /*  this.menuService.isCollapsed = !this.menuService.isCollapsed;
      document.documentElement.style.setProperty('--MenuBarWidth', this.menuService.isCollapsed ? '60px' : '200px');*/
  }

  test2() {
    this.router.navigateByUrl('/chart1');
  }
}
