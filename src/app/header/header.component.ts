import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {
  }

  get onHome() {
    return location.pathname === '/' || location.pathname === '';
  }

  get onAnime() {
    return location.pathname.startsWith('/anime') || location.pathname.startsWith('/catalogue');
  }
}
