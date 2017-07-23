import 'bootstrap/dist/css/bootstrap.css';

import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationModule} from '../navigation/navigation.module';

import {AppComponent} from './app.component';

export class AppModule {}

AppModule.annotations = [
  new NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NavigationModule
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [
      AppComponent
    ],
    providers: [
      Title
    ]
  })
];
