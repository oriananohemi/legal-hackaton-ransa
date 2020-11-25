import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ReportRoutingModule } from './report-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CheckComponent } from './components/check/check.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';

@NgModule({
  declarations: [LayoutComponent, ConfirmationComponent, CheckComponent, GenerateReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReportModule { }
