import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import {GuardGuard} from './core/guards/guard.guard'

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'new-report',
      loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
    },
    {
      path: 'main',
      canActivate: [GuardGuard],
      loadChildren: () => import('./view-table/view-table.module').then(m => m.ViewTableModule),
    },
    {
      path: 'laboral',
      canActivate: [GuardGuard],
      loadChildren: () => import('./laboral/laboral.module').then(m => m.LaboralModule),
    }
  ]
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
