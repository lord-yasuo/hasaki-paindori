import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  notFoundText: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Page non trouvée');
    this.notFoundText = 'Page non trouvée';
  }

}
