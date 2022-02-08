import { Component, OnInit } from '@angular/core';
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
  showGoTopButton = false;

  constructor(private _titleService: Title) {
    this._titleService.setTitle('Accueil - Hasaki Paindori');
  }

  ngOnInit() {
  }
}
