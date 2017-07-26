import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation.component';
import {InternationalizationModule} from '../internationalization/translate.module';
import {RouterModule} from '@angular/router';

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
