import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

import './app.scss';

import template from './template.html';

export class AppComponent {
  constructor(titleService) {
    titleService.setTitle('Hello');
  }
}

AppComponent.annotations = [
  new Component({
    selector: 'app-root',
    template
  })
];

AppComponent.parameters = [
  Title
];
