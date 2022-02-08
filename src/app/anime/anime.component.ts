import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeAnimation, fadeInEpisodes } from '../animations/animations';
import { listAnimes } from '../data/list-animes';
import { AnimeModel } from '../models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  animations: [
    fadeAnimation,
    fadeInEpisodes,
  ]
})
export class AnimeComponent implements OnInit {
  showGoTopButton = false;
  anime: AnimeModel;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _titleService: Title) { }

  ngOnInit() {
    const animeID = this._activatedRoute.snapshot.paramMap.get('id');
    this.anime = listAnimes[animeID]
    if (this.anime) {
      this._titleService.setTitle(this.anime.title + ' - Hasaki Paindori');

      // Add anime name in URL
      history.replaceState(history.state, '/anime/' + animeID, '/anime/' + animeID + '/' + this.anime.title);
      return;
    }

    this._router.navigateByUrl('/catalogue');
  }
}
