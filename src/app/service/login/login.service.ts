import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RH_URL } from './../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public headers = new Headers();

  constructor(private http: HttpClient) {}

  public login(data: any) {
    const rhUrl = RH_URL + 'login/';
    return this.http.post(rhUrl, data, { observe: 'response' });
  }
}
