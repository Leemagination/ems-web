import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationBarService } from '../../core/services/navigation-bar.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationBarService) {
    this.initNavigationBar(router.url);
  }

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        if (data.url !== data.urlAfterRedirects) {
          console.error(`路由错误:${data.url}不是有效的路由路径`);
          this.initNavigationBar(data.urlAfterRedirects);
          return;
        }
        this.initNavigationBar(data.url);
      }
    });
  }

  initNavigationBar(fullUrl: string) {
    const url = fullUrl.split('?')[0];
    this.navigationService.findTabIndexByUrl(url, true);
  }


}
