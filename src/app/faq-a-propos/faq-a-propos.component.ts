import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation } from '../animations/animations';

@Component({
  selector: 'app-faq-a-propos',
  templateUrl: './faq-a-propos.component.html',
  styleUrls: ['./faq-a-propos.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class FaqAProposComponent {
  showGoTopButton: boolean;

  constructor(private titleService: Title) {
    this.showGoTopButton = false;
    this.titleService.setTitle('À propos');
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset === undefined || offset != null) {
      if (offset === 0) {
        this.showGoTopButton = false;
      } else {
        this.showGoTopButton = true;
      }
    } else {
      offset = window.pageYOffset;
      this.showGoTopButton = true;
    }
  }

}
