import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from './../../../model/account';

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
    private loginService: LoginService,
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
