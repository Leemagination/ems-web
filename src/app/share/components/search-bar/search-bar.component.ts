import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit {
  @Output() searchEvent = new EventEmitter<boolean>();
  @Output() resetEvent = new EventEmitter<boolean>();
  @ViewChild('searchBar', { static: true }) searchBar: ElementRef;
  @ViewChild('buttonGroup', { static: true }) buttonGroup: ElementRef;
  @ViewChild('searchArea', { static: true }) searchArea: ElementRef;
  @ViewChild('basicButton', { static: true }) basicButton: ElementRef;
  @ViewChild('stretchArea', { static: false }) stretchArea: ElementRef;
  stretchVisible = false;

  @HostListener('window:resize')
  resizeEvent() {
    this.moveSearchItem();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.moveSearchItem();
    if (this.buttonGroup.nativeElement.children.length) {
      this.buttonGroup.nativeElement.style['marginRight'] = '20px';
    }
  }


  moveSearchItem() {
    const buttonGroupWidth = this.buttonGroup.nativeElement.clientWidth;
    const searchAreaWidth = this.searchArea.nativeElement.clientWidth;
    const basicButtonWidth = this.basicButton.nativeElement.clientWidth;
    const searchBarWidth = this.searchBar.nativeElement.clientWidth;
    if (searchBarWidth === 0) {
      return;
    }
    if (searchBarWidth < buttonGroupWidth + searchAreaWidth + basicButtonWidth + 70) {
      this.moveToStretchArea();
    } else {
      const children = this.stretchArea.nativeElement.children;
      if (children.length) {
        const itemWidth = children[0].offsetWidth;
        if (itemWidth === 0) {
          return;
        }
        if (itemWidth + buttonGroupWidth + searchAreaWidth + basicButtonWidth + 70 < searchBarWidth) {
          this.moveToSearchArea();
        }
      }
    }
  }

  moveToSearchArea() {
    const children = this.stretchArea.nativeElement.children;
    const dom = children[0];
    this.searchArea.nativeElement.append(dom);
    this.moveSearchItem();
  }

  moveToStretchArea() {
    const children = this.searchArea.nativeElement.children;
    if (children.length) {
      const dom = children[children.length - 1];
      if (this.stretchArea.nativeElement.children.length) {
        this.stretchArea.nativeElement.insertBefore(dom, this.stretchArea.nativeElement.firstElementChild);
      } else {
        this.stretchArea.nativeElement.append(dom);
      }
      this.moveSearchItem();
    }
  }
}
