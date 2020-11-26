import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboralComponent } from './components/laboral/laboral.component';
import {LaboralRoutingModule} from './laboral-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LaboralComponent],
  imports: [
    CommonModule,
    LaboralRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class LaboralModule { }
