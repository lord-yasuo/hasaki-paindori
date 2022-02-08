import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AProposComponent } from './a-propos.component';

export const APROPOS_ROUTE: Routes = [
  { path: '', component: AProposComponent }
];

@NgModule({
  declarations: [
    AProposComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(APROPOS_ROUTE),
    ScrollToModule.forRoot()
  ]
})
export class AProposModule { }
