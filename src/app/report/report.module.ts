import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ReportRoutingModule } from './report-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CheckComponent } from './components/check/check.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, CheckComponent, GenerateReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ReportModule { }
