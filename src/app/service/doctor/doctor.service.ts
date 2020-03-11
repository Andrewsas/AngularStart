import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Doctor } from 'src/app/model/doctor.model';
import { Constant } from '../../constant/constant';

import { CrudService } from 'src/app/service/crud/crud.service';

@Injectable()
export class DoctorService extends CrudService<Doctor> {

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
    super(http, Constant.DOCTOR, activatedRoute);
  }
}
