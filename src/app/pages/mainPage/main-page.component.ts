import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NavigationBarService } from '../../core/services/navigation-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationBarService, private route: ActivatedRoute) {
    this.initNavigationBar(router.url);
  }

  ngOnInit(): void {
    this.getRouteConfig();
    console.log(111)
    this.router.events.subscribe(data => {
      if (data instanceof NavigationStart) {
        console.log(data, 'start');
        this.initNavigationBar(data.url);
      }
      if (data instanceof NavigationError) {
        console.log(data);
      }
      if (data instanceof NavigationEnd) {
        console.log(data, 'end');
      }
    });
  }

  initNavigationBar(fullUrl) {
    const url = fullUrl.split('?')[0];
    this.navigationService.findTabIndexByUrl(url, true);
  }

  getRouteConfig() {
    this.navigationService.routeConfig = this.route.routeConfig;
  }


}
