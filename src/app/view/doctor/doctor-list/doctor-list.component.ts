import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { GenericService } from 'src/app/service/generic/GenericService';
import { GenericListComponent } from 'src/app/generic/generic-list/generic-list.component';
import { DoctorService } from 'src/app/service/doctor/doctor.service';
import { Doctor } from 'src/app/model/doctor.model';
import { ExcelService } from 'src/app/service/excel/excel.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent extends GenericListComponent<Doctor, DoctorService> {

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public service: DoctorService,
    private excelService: ExcelService,
    public genericService: GenericService
  ) {
    super(service, router, genericService);
  }

  public export() {
    const data: any[] = this.dataSource.filteredData.map(
      (d: any) => {
        return { CRIADO_EM: d.created_at, NOME: d.name, EMAIL: d.email, TELEFONE: d.phone };
    });
    this.excelService.exportAsExcelFile(data, 'Doctor');
  }
}
