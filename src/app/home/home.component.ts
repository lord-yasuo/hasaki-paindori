import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';
import { NewModel } from '../models/new.model';
import { HttpClient } from '@angular/common/http';

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
  news: Array<NewModel>;

  constructor(private _titleService: Title, private _http: HttpClient) {
    this._titleService.setTitle('Accueil - Hasaki Paindori');
  }

  ngOnInit() {
    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/news-data.json').subscribe(
      {
        next: data => {
          this.news = Object.entries(data).map((value) => (value[1])).sort((a, b) => b.lastUpdate - a.lastUpdate);
        },
        error: error => {
          console.error('Cannot get news: ', error)
        }
      }
    );
  }
}
