import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import translateLoader from './translate-loader';

export class InternationalizationModule {
  constructor(translateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }
}

InternationalizationModule.annotations = [
  new NgModule({
    imports: [
      CommonModule,
      HttpModule,
      TranslateModule.forRoot(translateLoader)
    ],
    exports: [
      CommonModule,
      TranslateModule
    ]
  })
];

InternationalizationModule.parameters = [
  TranslateService
];
