import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ReportRoutingModule } from './report-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LayoutComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ReportModule { }
