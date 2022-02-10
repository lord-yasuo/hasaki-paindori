import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation } from '../animations/animations';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    fadeAnimation
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
