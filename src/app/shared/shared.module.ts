import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { Chart2Component } from './chart2/chart2.component';
import { ChartsModule } from 'ng2-charts';
import { TableLaboralComponent } from './table-laboral/table-laboral.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    ChartComponent,
    Chart2Component,
    TableLaboralComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    ChartComponent,
    Chart2Component,
    TableLaboralComponent
  ]
})
export class SharedModule { }
