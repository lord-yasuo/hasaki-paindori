import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ROUTE_ANIMATION } from './animations/animations';

@Component({
  animations: [ROUTE_ANIMATION],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  getRouteAnimation(outlet: RouterOutlet): string {
    return outlet
      && outlet.activatedRouteData
      && outlet.activatedRouteData['label'] as string;
  }
}
