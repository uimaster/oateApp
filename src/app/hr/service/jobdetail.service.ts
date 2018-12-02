import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';
import { HR_JOBS_DETAIL } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HrJobDetailSerivce {
  
    constructor(private http: HttpClient){}
    
    jobDetail(jobid): Observable<any>{
        const params = new HttpParams().set('jobId', jobid);
        return this.http.get(HR_JOBS_DETAIL, { params });
    }

}