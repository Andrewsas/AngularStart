import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './security/auth-guard/authguard.service';

import { AuthLayoutComponent } from './components/layouts/auth/auth-layout.component';
import { AdminLayoutComponent } from './components/layouts/admin/admin-layout.component';




const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
  },
  {
    path: 'settings',
    component: AdminLayoutComponent,
  },
  {
    path: 'home',
    children: [
      {
        path: 'item1',
        component: AdminLayoutComponent,
      },
      {
        path: 'item2',
        component: AdminLayoutComponent,
      },
      {
        path: 'item3',
        component: AdminLayoutComponent,
      },
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './view/session/session.module#SessionModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
