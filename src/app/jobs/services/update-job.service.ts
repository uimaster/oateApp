import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EDIT_JOB } from '../../apiurl/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UpdateJobSerivce {
  
    constructor(private http: HttpClient){}
    
    // updatejob(payload: ResponseUpdateEmployProfile): Observable<any> {
    //     return this.http.put( EDIT_JOB, payload)
    //     .map((res: any) => {
    //       return res;
    //     })
    //       .catch((error) => Observable.throw(error.json() || 'Server error'));
    //   }
  

}