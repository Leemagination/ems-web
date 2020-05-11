import { Component, OnInit } from '@angular/core';
import { NavigationBarService } from '../../../core/services/navigation-bar.service';

@Component({
  selector: 'app-tab-change',
  templateUrl: './tab-change.component.html',
  styleUrls: ['./tab-change.component.scss']
})
export class TabChangeComponent implements OnInit {

  constructor(private navigationService: NavigationBarService) {
  }

  ngOnInit(): void {
  }

  tabChange(params?) {
    this.navigationService.tabChangeEvent$.next({url: '/complexTable', params: params ? {status: true, orderType: '发货单'} : null});
  }

}
