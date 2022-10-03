import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';
import { DayAnimeModel } from '../models/agenda-model';

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
  agenda: Array<{ day: string, animes: Array<DayAnimeModel> }>;

  constructor(private _titleService: Title, private _http: HttpClient) {
    this._titleService.setTitle('Mon agenda - ' + this.getAnimeSeason() + ' - HasakiDesu');
  }

  ngOnInit(): void {
    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/agenda-data.json').subscribe(
      {
        next: data => {
          this.agenda = Object.entries(data).map(([day, animes]: [day: string, animes: Array<DayAnimeModel>]) => ({ day, animes }));
        },
        error: error => {
          console.error('Cannot get agenda: ', error)
        }
      }
    );
  }

  getVODs(anime: DayAnimeModel) {
    return anime.vods.split('/').map(vod => vod.toLowerCase());
  }

  isLatestAnime(index: number) {
    if (window.innerWidth < 576) {
      return false;
    }
    return index === this.agenda.map(day => day.animes.length).indexOf(Math.max(... this.agenda.map(day => day.animes.length)));
  }

  getAnimeSeason() {
    return ['Hiver', 'Printemps', 'Été', 'Automne'][Math.floor((new Date().getMonth() / 12 * 4)) % 4] + ' ' + new Date().getFullYear();
  }
}
