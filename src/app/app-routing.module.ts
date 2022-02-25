import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { label: 'Accueil' }
  },
  {
    path: 'anime',
    redirectTo: 'catalogue',
    data: { label: 'Catalogue' }
  },
  {
    path: 'anime/:id',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule),
    data: { label: 'Anime' }
  },
  {
    path: 'anime/:id/:name',
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule),
    data: { label: 'Anime' }
  },
  {
    path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    data: { label: 'Not found' }
  },
  {
    path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule),
    data: { label: 'Agenda' }
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
    data: { label: 'Catalogue' }
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then(m => m.AProposModule),
    data: { label: 'A propos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { 
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
