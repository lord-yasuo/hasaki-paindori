import { Component, HostListener, OnInit } from '@angular/core';
import { fadeAnimation, itemsAnimation } from '../animations/animations';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})


export class AgendaComponent implements OnInit {
  showGoTopButton: boolean;
  title: string;

  constructor() {
    this.showGoTopButton = false;
    this.title = 'Agenda - Hiver 2022';
  }

  ngOnInit() {
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

