import { ToastService } from './../../service/toast/toast.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { SessionRoutingModule } from './session-routing.module';

import { RecoveryComponent } from './recovery/recovery.component';
import { StorageService } from 'src/app/service/storage/storage.service';
import { RecoveryService } from 'src/app/service/recovery/recovery.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [LoginComponent, RecoveryComponent],
  providers: [RecoveryService, StorageService, ToastService]
})
export class SessionModule {}
