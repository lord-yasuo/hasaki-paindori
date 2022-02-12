import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbButtonsModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';

export const LISTANIMES_ROUTE: Routes = [
  { path: '', component: CatalogComponent }
];

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgbButtonsModule,
    NgbDropdownModule,
    RouterModule.forChild(LISTANIMES_ROUTE),
    SharedModule,
    HttpClientModule
  ]
})
export class CatalogModule { }
