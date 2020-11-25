import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../material/material.module'
import { LoginComponent } from './components/login/login.component';
import {LoginRoutingModule} from './login-routing.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginComponent,
    LoginRoutingModule
  ]
})
export class LoginModule { }
