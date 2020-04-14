import { Component, OnInit } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationStart) {
        console.log(data)
      }
    });
  }

}
