import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FaqAProposComponent } from './faq-a-propos.component';

export const APROPOS_ROUTE: Routes = [
  { path: '', component: FaqAProposComponent }
];

@NgModule({
  declarations: [
    FaqAProposComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(APROPOS_ROUTE),
    ScrollToModule.forRoot()
  ]
})
export class FaqAProposModule { }
