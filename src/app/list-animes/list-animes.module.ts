import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ListAnimesComponent } from './list-animes.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbButtonsModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

export const LISTANIMES_ROUTE: Routes = [
  { path: '', component: ListAnimesComponent }
];

@NgModule({
  declarations: [
    ListAnimesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgbButtonsModule,
    NgbDropdownModule,
    RouterModule.forChild(LISTANIMES_ROUTE),
    ScrollToModule.forRoot()
  ]
})
export class ListAnimesModule { }
