import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

import { DoctorService } from 'src/app/service/doctor/doctor.service';


@NgModule({
  declarations: [DoctorListComponent],
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    MaterialModule,
    DoctorRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [DoctorService]
})
export class DoctorModule { }
