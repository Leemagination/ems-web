import { Component, OnInit } from '@angular/core';
import { HandleErrorService } from './handle-error.service';
import { CookieService } from '../../../core/services/cookie.service';

@Component({
  selector: 'app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.scss']
})
export class HandleErrorComponent implements OnInit {

  constructor(private handleService: HandleErrorService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  errorRequest(code) {
    this.handleService.handleErrorMethod(code).subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error);
    });
  }

}
