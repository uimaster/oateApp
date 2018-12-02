import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { JOB_DESCRIPTION } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class JobDescSerivce {
  
    constructor(private http: HttpClient){}
    
    Jobdesc(jobid): Observable<any>{
        return this.http.get(JOB_DESCRIPTION + '/' + jobid);
    }

}