import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';

@Component({
  selector: 'app-list-animes',
  templateUrl: './list-animes.component.html',
  styleUrls: ['./list-animes.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})
export class ListAnimesComponent implements OnInit {

  showGoTopButton: boolean;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('Liste animes');

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
