import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LOGIN_URL } from '../apiurl/api.url';

@Injectable()
export class AuthService {

  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(){

    // let _headers: new HttpHeaders();
    // const headers = _headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // const headers = this._headers.append('Authorization:', 'Bearer ' + this.authService._token);
    // return this.http.get(LOGIN_URL, { headers : headers });
  }

}
