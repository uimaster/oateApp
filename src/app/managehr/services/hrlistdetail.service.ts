import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// import { JOB_DETAILS } from '../../apiurl/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HrListDetailSerivce {
  
    constructor(private http: HttpClient){}
    
    // Jobdetails(hrid): Observable<any>{
    //     return this.http.get(JOB_DETAILS + '/' + hrid);
    // }

}