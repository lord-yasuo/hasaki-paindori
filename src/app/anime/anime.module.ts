import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime.component';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';

export const ANIME_ROUTE: Routes = [
  { path: '', component: AnimeComponent },
  { path: '/:id', component: AnimeComponent }
];

@NgModule({
  declarations: [
    AnimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ANIME_ROUTE),
    SharedModule,
    HttpClientModule
  ]
})
export class AnimeModule { }
