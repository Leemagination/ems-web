import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  value = null;

  constructor() {
  }

  ngOnInit(): void {
  }


  search() {
    console.log('搜索');
  }

  reset() {
    console.log('重置');
  }
}
