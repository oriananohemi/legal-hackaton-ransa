import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { Chart2Component } from './chart2/chart2.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    ChartComponent,
    Chart2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    ChartComponent,
    Chart2Component
  ]
})
export class SharedModule { }
