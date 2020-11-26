import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    TableComponent
  ]
})
export class SharedModule { }
