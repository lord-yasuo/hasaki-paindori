import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AnimeComponent } from './anime.component';
import { HttpClientModule } from '@angular/common/http';

export const ANIME_ROUTE: Routes = [
  { path: '', component: AnimeComponent }
];

@NgModule({
  declarations: [
    AnimeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ANIME_ROUTE),
    ScrollToModule.forRoot()
  ]
})
export class AnimeModule { }
