import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EMPLOYER_JOBS } from '../../apiurl/api.url';
import { InterceptorSkipHeader } from '../../auth/token.interceptor';

@Injectable()
export class EmployerjobService {


  token  = localStorage.getItem('token');

  constructor(
    private httpclient: HttpClient
    ) { }

  employerjobs(){

    let headers = new HttpHeaders();     
    headers = headers.append('x-token', this.token);   
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append(InterceptorSkipHeader, '');
    return this.httpclient.get(EMPLOYER_JOBS, {headers: headers});
    
  }

}
