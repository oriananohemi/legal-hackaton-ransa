import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

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
      loadChildren: () => import('./view-table/view-table.module').then(m => m.ViewTableModule),
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
