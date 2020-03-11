import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constant } from './../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  private baseURL = Constant.BASE_URL_AUTH;
  private baseRecovery = Constant.RECOVERY;
  private baseReset = Constant.RESET;

  constructor(
    public http: HttpClient) {
  }

  public getOne(id: String): Observable<any> {
    const getAllUrl = this.baseURL + this.baseRecovery + id;
    return this.http.post(getAllUrl, {});
  }

  public updateSenha(data: any) {
    const getAllUrl = this.baseURL + this.baseReset;
    return this.http.post(getAllUrl, data);
  }
}
