import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../../core/base-service.service';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrls: ['./test-module.component.scss']
})
export class TestModuleComponent implements OnInit {

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {
  /*  this.baseService.getMethod().subscribe(data => {
      console.log(data);
    }, err => {
      console.error(err);
    }, () => {
      console.log('complete');
    });*/

    this.baseService.getMethod3().subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error,1);
    });
  }

}
