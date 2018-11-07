import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADD_HR } from '../../apiurl/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AddhrService{

    constructor(private http: HttpClient) { }

    addHrdata(payload): Observable<any> {
        return this.http.post( ADD_HR, payload)
        .map((res: any) => {
          return res;
        })
          .catch((error) => Observable.throw(error.json() || 'Server error'));
      }

}