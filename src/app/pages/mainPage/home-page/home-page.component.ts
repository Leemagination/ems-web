import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  flag = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    document.documentElement.style.setProperty('--MenuBarWidth', this.flag ? '60px' : '160px');
    this.flag = !this.flag;
  }
}
