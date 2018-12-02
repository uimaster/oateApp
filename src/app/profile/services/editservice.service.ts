import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EDIT_PROFILE } from '../../../utils/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ResponseUpdateEmployProfile } from '../model/employeprofile.model';

@Injectable()
export class EditserviceService {
  
  constructor(private http: HttpClient) { }

  updateProfile(payload: ResponseUpdateEmployProfile): Observable<any> {
    return this.http.put( EDIT_PROFILE, payload)
    .map((res: any) => {
      return res;
    })
      .catch((error) => Observable.throw(error.json() || 'Server error'));
  }

}
