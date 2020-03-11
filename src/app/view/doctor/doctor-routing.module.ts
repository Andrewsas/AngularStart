import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DoctorListComponent
      },
      {
        path: 'form',
        component: DoctorListComponent
      },
      {
        path: 'form/:uuid',
        component: DoctorListComponent
      },
      {
        path: 'copy/:copy',
        component: DoctorListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
