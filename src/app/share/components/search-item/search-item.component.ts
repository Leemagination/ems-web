import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: ' app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() searchLabel: string;
  @Input() labelVisible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
