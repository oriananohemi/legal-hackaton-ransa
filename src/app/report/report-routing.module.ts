import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
