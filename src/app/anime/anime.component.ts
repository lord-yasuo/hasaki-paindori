import { Component, HostListener, OnInit } from '@angular/core';
import { fadeAnimation, fadeInEpisodes } from '../animations/animations';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  animations: [
    fadeAnimation,
    fadeInEpisodes,
  ]
})
export class AnimeComponent implements OnInit {
  showGoTopButton: boolean;

  constructor() {
    this.showGoTopButton = false;
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
