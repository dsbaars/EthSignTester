import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Injectable } from '@angular/core';

import { DefaultComponent } from './default/default';


@Component({
  selector: 'app',
  templateUrl: '/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/', name: 'Default', component: DefaultComponent, useAsDefault: true }
])
@Injectable()
export class AppComponent {
  static get parameters() {
    return [[Router]];
  }

  constructor(router) {
    this.router = router;
  }

  isActive(instruction) {
    return this.router.isRouteActive(this.router.generate(instruction));
  }
}
