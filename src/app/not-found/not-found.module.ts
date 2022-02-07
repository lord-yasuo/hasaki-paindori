import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const NOTFOUND_ROUTE: Routes = [
  { path: '', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NOTFOUND_ROUTE)
  ]
})
export class NotFoundModule { }
