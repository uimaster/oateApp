import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPLOYER_JOBS } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployerJobsService {

  constructor(private http: HttpClient) { }

  employerjobs(): Observable<any> {
    return this.http.get(EMPLOYER_JOBS)
      .map((res: any) => {
        return res;
      })
      .catch((error: any) =>
          Observable.throw(error.error || 'Server error' )
       );
  }

}
