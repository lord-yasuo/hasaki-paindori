import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AgendaComponent } from './agenda.component';

export const AGENDA_ROUTE: Routes = [
  { path: '', component: AgendaComponent }
];

@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AGENDA_ROUTE),
    ScrollToModule.forRoot()
  ]
})
export class AgendaModule { }
