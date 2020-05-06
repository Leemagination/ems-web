import { NgModule, Optional, SkipSelf } from '@angular/core';
import { httpInterceptorProviders } from './httpInterceptor';
import { RouteReuseStrategy } from '@angular/router';
import { RouteTabReuseStrategy } from './RouteReuseStrategy';
import { translateModule } from './i18n/translate';
import { coreServices } from './services';
import { routerGuard } from './routerGuard';

@NgModule({
  declarations: [],
  imports: [translateModule],
  providers: [
    httpInterceptorProviders,
    ...routerGuard,
    ...coreServices,
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
