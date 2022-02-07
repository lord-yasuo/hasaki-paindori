import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})
export class HomeComponent implements OnInit {
  title: string;
  showGoTopButton: boolean;

  constructor(private titleService: Title) {
    this.title = 'Dernières sorties';
    this.showGoTopButton = false;
  }

  ngOnInit() {
    this.titleService.setTitle('Accueil');
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
