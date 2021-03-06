import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function languageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return params.key;
  }
}

export const translateModule = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader, useFactory: languageLoader, deps: [HttpClient]
  },
  missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
});


