import { ToastService } from './../../service/toast/toast.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { SessionRoutingModule } from './session-routing.module';

import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';

import { StorageService } from 'src/app/service/storage/storage.service';
import { RecoveryService } from 'src/app/service/recovery/recovery.service';
import { LoginService } from 'src/app/service/login/login.service';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    MaterialModule,
  ],
  declarations: [LoginComponent, RecoveryComponent],
  providers: [RecoveryService, StorageService, ToastService, LoginService ]
})
export class SessionModule {}
