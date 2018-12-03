import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HR_JOBS } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HrlistService {

  constructor(private http: HttpClient) { }

  getHrlistData(): Observable<any> {
    return this.http.get(HR_JOBS)
    .map((res: any) => {
      return res;
    })
    .catch((error: any) =>
        Observable.throw(error.error || 'Server error' )
     );
  }

}
