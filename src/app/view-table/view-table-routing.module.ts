import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTableRoutingModule { }
