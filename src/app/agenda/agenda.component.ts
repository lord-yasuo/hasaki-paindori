import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeAnimation, itemsAnimation } from '../animations/animations';
import { myAgenda } from '../data/agenda-data';
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
  agenda: Array<{day: string, animes: Array<DayAnimeModel>}>;

  constructor(private _titleService: Title) {
    this._titleService.setTitle('Mon agenda - Hiver 2022 - Hasaki Paindori');
  }

  ngOnInit(): void {
    this.agenda = Object.entries(myAgenda).map(([day, animes]: [day: string, animes: Array<DayAnimeModel>]) => ({day, animes}));
  }
  
  getVODs(anime: DayAnimeModel) {
    return anime.vods.split('/').map(vod => vod.toLowerCase());
  }

  isLatestAnime(index: number) {
    if (window.innerWidth < 576) {
      return false;
    }
    return index === this.agenda.map(day =>day.animes.length).indexOf(Math.max(... this.agenda.map(day =>day.animes.length)));
  }
}

