import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {InternationalizationModule} from '../internationalization/translate.module';

import {ApimockComponent} from './apimock.component';

export class ApimockModule {}

const apimockRoutes = [
  {path: 'apimock', component: ApimockComponent}
];

ApimockModule.annotations = [
  new NgModule({
    imports: [
      InternationalizationModule,
      RouterModule.forChild(apimockRoutes),
      HttpClientModule
    ],
    declarations: [
      ApimockComponent
    ],
    exports: [
      RouterModule
    ]
  })
];
