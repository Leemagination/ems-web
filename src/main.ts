import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
import { MockMode } from 'mock/mock';
if (environment.production) {
  enableProdMode();
}
MockMode();
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  const hot = 'hot';
  if (module[hot]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('Ammm.. HMR is not enabled for webpack');
  }
} else {
  bootstrap().catch(err => console.error(err));
}
