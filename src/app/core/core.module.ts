import {NgModule, Optional, SkipSelf} from '@angular/core';
import {httpInterceptorProviders} from './httpInterceptor';
import {RouteReuseStrategy} from '@angular/router';
import {RouteTabReuseStrategy} from './RouteReuseStrategy';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    httpInterceptorProviders,
    {provide: RouteReuseStrategy, useClass: RouteTabReuseStrategy}
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
