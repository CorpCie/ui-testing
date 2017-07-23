import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {InternationalizationModule} from '../internationalization/translate.module';

export class NavigationModule {}

NavigationModule.annotations = [
  new NgModule({
    imports: [
      InternationalizationModule
    ],
    declarations: [
      NavigationComponent
    ],
    exports: [
      NavigationComponent
    ]
  })
];
