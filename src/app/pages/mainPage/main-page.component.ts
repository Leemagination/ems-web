import {Component, OnInit} from '@angular/core';
import {NavigationStart, Route, Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(1)
    this.router.events.subscribe(data => {
      if(data instanceof NavigationStart){
        console.log(data)
      }
    });
  }

}
