import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['cn', 'en']);
    translate.use('cn');
    //translate.setDefaultLang('en')
    if (!localStorage.getItem('deliverStorageMockData')) {
      localStorage.setItem('deliverStorageMockData', JSON.stringify([{address:'广州',editable:false},{address:'深圳',editable:false},{address:'上海',editable:false},{address:'北京',editable:false}]))
    }
  }
}
