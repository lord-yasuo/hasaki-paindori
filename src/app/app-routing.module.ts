import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'anime',
    redirectTo: 'catalogue'
  },
  {
    path: 'anime/:id',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule)
  },
  {
    path: 'anime/:id/:name',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule)
  },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  {
    path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then(m => m.AProposModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
