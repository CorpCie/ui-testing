import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NavigationComponent} from './navigation.component';
import {InternationalizationModule} from '../internationalization/translate.module';

export class NavigationModule {}

NavigationModule.annotations = [
  new NgModule({
    imports: [
      InternationalizationModule,
      RouterModule
    ],
    declarations: [
      NavigationComponent
    ],
    exports: [
      NavigationComponent
    ]
  })
];
