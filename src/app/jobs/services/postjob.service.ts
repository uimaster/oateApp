import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { POST_JOB_URL } from '../../../utils/api.url';

@Injectable()
export class PostJobService{

    constructor(private http: HttpClient) { }

    addjobdata(payload): Observable<any> {
        return this.http.post( POST_JOB_URL, payload)
        .map((res: any) => {
          return res;
        })
          .catch((error) => Observable.throw(error.json() || 'Server error'));
      }

}