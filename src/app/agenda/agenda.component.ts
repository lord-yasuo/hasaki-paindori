import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  showGoTopButton = false;

  constructor(private _titleService: Title) {
    this._titleService.setTitle('Mon agenda - Hiver 2022 - Hasaki Paindori');
  }

  ngOnInit(): void {
  }
}

