import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { Chart2Component } from './chart2/chart2.component';
import { ChartsModule } from 'ng2-charts';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule
];

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
    RouterModule,
    materialModules
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    ChartComponent,
    Chart2Component,
    materialModules
  ]
})
export class SharedModule { }
