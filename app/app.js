import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
//import 'systemjs-hot-reloader/default-listener.js';

import "bootstrap/scss/bootstrap.scss!"
import { AppComponent } from './app.component';

// Production mode
if (System.production) {
  enableProdMode();
}

bootstrap(AppComponent);
