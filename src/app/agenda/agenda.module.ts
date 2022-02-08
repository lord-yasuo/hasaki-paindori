import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { SharedModule } from '../shared.module';

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
    SharedModule
  ]
})
export class AgendaModule { }
