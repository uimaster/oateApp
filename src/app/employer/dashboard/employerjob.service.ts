import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPLOYER_JOBS } from '../../apiurl/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployerjobService {


  token  = localStorage.getItem('token');


  constructor(
    private http: HttpClient
    ) { }

  // employerjobs(){
  //   return this.http.get(EMPLOYER_JOBS);
  // }

  employerjobs(): Observable<any> {
    return this.http.get(EMPLOYER_JOBS)
      .map((res: any) => {
        if (res.statusCode === 200) {
          return res;
        } else {
          return res;
        }
      })
      .catch((error) => Observable.throw(error.json() || 'Server error'));
  }

}
