import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Account } from './../../../model/account';

import { ToastService } from '../../../service/toast/toast.service';
import { LoginService } from '../../../service/login/login.service';
import { StorageService } from 'src/app/service/storage/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public hide = true;
  public obj = new Account();

  constructor(
    private router: Router,
    private toastService: ToastService,
    private loginService: LoginService,
    private dialog: MatDialog,
    private storage: StorageService
  ) {
    if (this.storage.token) {
      this.router.navigate(['/dashboard']);
    }
  }

  public login() {
    this.loginService.login(this.obj).subscribe();
  }

}
