import 'bootstrap/dist/css/bootstrap.css';

import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigationModule} from '../navigation/navigation.module';
import {HomeModule} from '../home/home.module';
import {ApimockModule} from '../apimock/apimock.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

export class AppModule {}

AppModule.annotations = [
  new NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HomeModule,
      ApimockModule,
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
