import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos.component';
import { SharedModule } from '../shared.module';

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
    SharedModule
  ]
})
export class AProposModule { }
