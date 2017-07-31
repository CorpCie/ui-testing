import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import template from './template.html';
import './apimock.scss';

export class ApimockComponent {
  constructor(httpClient) {
    httpClient.get('myapi/members')
              .subscribe(members => {
                this.members = members.data;
              });

    this.panelColors = ['blue', 'red', 'yellow', 'green'];
  }

  getPanelColor(index) {
    return this.panelColors[index % this.panelColors.length];
  }
}

ApimockComponent.annotations = [
  new Component({
    template
  })
];

ApimockComponent.parameters = [
  HttpClient
];
