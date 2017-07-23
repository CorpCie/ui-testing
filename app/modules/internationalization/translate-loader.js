import {Http} from '@angular/http';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

function HttpLoaderFactory(http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export default {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [Http]
  }
};
