import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export class AppRoutingModule {}

AppRoutingModule.annotations = [
  new NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
];
