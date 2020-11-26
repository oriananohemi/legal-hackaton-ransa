import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTableRoutingModule } from './view-table-routing.module';
import { ViewTableComponent } from './view-table/view-table.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ViewTableComponent],
  imports: [
    CommonModule,
    ViewTableRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ViewTableModule { }
