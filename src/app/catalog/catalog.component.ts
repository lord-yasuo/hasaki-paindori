import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})
export class CatalogComponent implements OnInit {
  showGoTopButton = false;

  constructor( private _titleService: Title) {
    this._titleService.setTitle('Catalogue - Hasaki Paindori');
  }

  ngOnInit() {
  }
}
