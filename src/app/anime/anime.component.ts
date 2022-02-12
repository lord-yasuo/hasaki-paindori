import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeAnimation } from '../animations/animations';
import { AnimeModel } from '../models/anime.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AnimeComponent implements OnInit {
  showGoTopButton = false;
  anime: AnimeModel;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _titleService: Title, private _http: HttpClient) { }

  ngOnInit() {
    const animeID = this._activatedRoute.snapshot.paramMap.get('id');

    if (!animeID) {
      console.error('Cannot get anime ID')
      this._router.navigateByUrl('/catalogue');
      return;
    }

    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/animes-data.json')
      .subscribe({
        next: data => {
          this.anime = data[animeID];

          if (this.anime) {
            this._titleService.setTitle(this.anime.title + ' - Hasaki Paindori');

            // Add anime name in URL
            history.replaceState(history.state, '/anime/' + animeID, '/anime/' + animeID + '/' + this.anime.title);
            return;
          }

          this._router.navigateByUrl('/catalogue');
        },
        error: error => {
          console.error('Cannot get anime with ID: ' + animeID, error)
        }
      });
  }
}
