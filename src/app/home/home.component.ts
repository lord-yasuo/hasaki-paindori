import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';
import { listAnimes } from '../data/list-animes';
import { listNews } from '../data/list-news';
import { AnimeModel } from '../models/anime.model';
import { NewModel } from '../models/new.model';

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

  constructor(private _titleService: Title) {
    this._titleService.setTitle('Accueil - Hasaki Paindori');
  }

  ngOnInit() {
    this.news = Object.entries(listNews).map((value) => (value[1])).sort((a, b) => b.lastUpdate - a.lastUpdate);
  }

  getAnimeData(item: NewModel): AnimeModel {
    return listAnimes[item.id];
  }
}
