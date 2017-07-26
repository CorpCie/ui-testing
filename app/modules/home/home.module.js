import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InternationalizationModule} from '../internationalization/translate.module';

import {TimelineComponent} from '../timeline/timeline.component';
import {HomeComponent} from './home.component';

export class HomeModule {}

const homeRoutes = [
  {path: 'home', component: HomeComponent}
];

HomeModule.annotations = [
  new NgModule({
    imports: [
      InternationalizationModule,
      RouterModule.forChild(homeRoutes)
    ],
    declarations: [
      HomeComponent,
      TimelineComponent
    ],
    exports: [
      RouterModule
    ]
  })
];
