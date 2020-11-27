import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboralComponent } from './components/laboral/laboral.component';

const routes: Routes = [
  {
    path: '',
    component: LaboralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboralRoutingModule { }
