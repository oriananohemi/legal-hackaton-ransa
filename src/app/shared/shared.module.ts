import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [HeaderComponent, SharedComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SharedComponent
  ]
})
export class SharedModule { }
