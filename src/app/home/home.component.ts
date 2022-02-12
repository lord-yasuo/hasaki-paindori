import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation } from '../animations/animations';
import { AnimeModel, CatalogModel } from '../models/anime.model';
import { NewModel } from '../models/new.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class HomeComponent implements OnInit {
  showGoTopButton = false;
  news: Array<NewModel>;
  catalog: CatalogModel;

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
          console.log('Cannot get news: ', error)
        }
      }
    );

    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/animes-data.json')
    .subscribe({
      next: data => {
        this.catalog = data as CatalogModel;
      },
      error: error => {
        console.error('Cannot get catalog: ', error)
      }
    });
  }

  getAnimeData(item: NewModel): AnimeModel {
    if (!this.catalog) {
      return null;
    }

    return this.catalog[item.id];
  }
}
