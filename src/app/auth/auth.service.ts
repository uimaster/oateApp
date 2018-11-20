import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { LOGIN_URL, REFRESHTOKEN_URL } from '../apiurl/api.url';
import { LoginRequest, LoginResponse } from './user.model';
import { InterceptorSkipHeader} from './token.interceptor';
import { LocalStorage } from '../../utils/localStorage';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }


  login(payload: LoginRequest): Observable<any>{
   
    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', 'Basic ' + btoa(payload.username + ':' + payload.password));

    headers = headers.append('x-token', 'doatwke');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append(InterceptorSkipHeader, '');
    return this.http.post(LOGIN_URL, payload, { headers: headers })
      .map((res: LoginResponse) => {
        if (res) {
          return res;
        }
      })
      .catch((error) => Observable.throw(error || 'server Error.'));
  }

  refreshToken(): Observable<LoginResponse> {

    const payload = JSON.stringify({
      'token': `${LocalStorage.getRefreshToken()}`
    });
    return this.http.post(REFRESHTOKEN_URL, payload)
      .map((res: LoginResponse) => {
        if (res.message !== 'BAD REQUEST  ') {
          return res;
        } else {
          this.router.navigate(['/login']);
        }

      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  logoutOnError(): Observable<any> {
    localStorage.clear();
    return <any> false;
  }

}
