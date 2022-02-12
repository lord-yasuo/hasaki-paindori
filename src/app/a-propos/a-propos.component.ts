import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})
export class AProposComponent {
  showGoTopButton = false;

  constructor(private _titleService: Title) {
    this._titleService.setTitle('A propos - Hasaki Paindori');
  }
}
