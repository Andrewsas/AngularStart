import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { ToastService } from '../../../service/toast/toast.service';
import { RecoveryService } from 'src/app/service/recovery/recovery.service';

import { SpinerComponent } from 'src/app/generic/spiner/spiner.component';
import { MessageType, IconType, MessageText } from '../../../constant/constant';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  public hide = true;

  public recoveryForm = new FormGroup({
    token: new FormControl('', []),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get confirmPassword() {
    return this.recoveryForm.get('confirmPassword');
  }

  get password() {
    return this.recoveryForm.get('password');
  }

  constructor(
    private router: Router,
    private service: RecoveryService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('token') !== null) {
      const token = this.activatedRoute.snapshot.paramMap.get('token');
      this.recoveryForm.get('token').setValue(token);
    }
  }

  updateSenha() {
    this.service.updateSenha(this.recoveryForm.value).subscribe(
      (data: any) => {
        this.toastService.toats(
          'register.update',
          MessageType.SUCCESS,
          IconType.NOTIFICATION
        );
        this.router.navigate(['/login']);
      }, (error) => {
        this.toastService.toats(
          MessageText.ERROR,
          MessageType.ERROR,
          IconType.ERROR
        );
      }
    );
  }

  public veridicarPassword() {
    if (this.recoveryForm.get('password').value === this.recoveryForm.get('confirmPassword').value) {
      this.recoveryForm.get('confirmPassword').setErrors(null);
    } else {
      this.recoveryForm.get('confirmPassword').setErrors({});
    }
  }

  openDialog() {
    return this.dialog.open(SpinerComponent, {
      width: '100%',
      height: '100%',
      disableClose: true
    });
  }
}
