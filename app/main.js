import './polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './modules/index/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
