import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { JOB_DETAILS } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class JobDetailSerivce {
  
    constructor(private http: HttpClient){}
    
    Jobdetails(jobid): Observable<any>{
        return this.http.get(JOB_DETAILS + '/' + jobid);
    }

}