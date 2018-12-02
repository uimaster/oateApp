import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PERSONAL_DETAILS } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonalDetailSerivce {
  
    constructor(private http: HttpClient){}
    
    PersonalDetail(): Observable<any>{
        return this.http.get(PERSONAL_DETAILS);
    }

}