import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fadeAnimation, itemsAnimation } from '../animations/animations';
import { AnimeModel } from '../models/anime.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    fadeAnimation,
    itemsAnimation
  ]
})
export class CatalogComponent implements OnInit {
  showGoTopButton = false;
  catalog: Array<AnimeModel>;

  constructor(private _router: Router, private _titleService: Title, private _http: HttpClient) {
    this._titleService.setTitle('Catalogue - HeyHasaki');
  }

  ngOnInit() {
    this._http.get('https://raw.githubusercontent.com/lord-yasuo/hasaki-paindori/data/animes-data.json')
      .subscribe({
        next: data => {
          this.catalog = Object.entries(data).map((value) => (value[1]));
          this._router.navigateByUrl('/catalogue');
        },
        error: error => {
          console.error('Cannot get catalog with ID: ' + error);
          this._router.navigateByUrl('/');
        }
      });
    }
}
