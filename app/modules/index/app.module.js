import 'bootstrap/dist/css/bootstrap.css';

import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {NavigationModule} from '../navigation/navigation.module';
import {HomeModule} from '../home/home.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

export class AppModule {}

AppModule.annotations = [
  new NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NavigationModule,
      AppRoutingModule,
      HomeModule
    ],
    exports: [
      RouterModule
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
