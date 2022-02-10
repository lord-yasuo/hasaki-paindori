import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation } from '../animations/animations';
import { listAnimes } from '../data/animes-data';
import { AnimeModel } from '../models/anime.model';
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

  constructor(private _titleService: Title, private _http: HttpClient) {
    this._titleService.setTitle('Accueil - Hasaki Paindori');
  }

  ngOnInit() {
    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/news-data.json').subscribe(data => {
      this.news = Object.entries(data).map((value) => (value[1])).sort((a, b) => b.lastUpdate - a.lastUpdate);
    });
  }

  getAnimeData(item: NewModel): AnimeModel {
    return listAnimes[item.id];
  }
}
