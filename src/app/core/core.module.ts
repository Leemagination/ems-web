import { NgModule, Optional, SkipSelf } from '@angular/core';
import { httpInterceptorProviders } from './httpInterceptor';
import { RouteReuseStrategy } from '@angular/router';
import { RouteTabReuseStrategy } from './RouteReuseStrategy';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { languageLoader } from './i18n/translate';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    httpInterceptorProviders,
    { provide: RouteReuseStrategy, useClass: RouteTabReuseStrategy }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        '核心模块CoreModule只允许在根模块引进');
    }
  }
}
