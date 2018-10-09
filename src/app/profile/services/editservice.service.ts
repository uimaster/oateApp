import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EDIT_PROFILE } from '../../apiurl/api.url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ResponseUpdateEmployProfile } from '../model/employeprofile.model';

@Injectable()
export class EditserviceService {
  
  public employid = localStorage.getItem('empid');

  constructor(private http: HttpClient) { }

  updateProfile(responseupdateemployprofile: ResponseUpdateEmployProfile): Observable<any> {
    return this.http.put( EDIT_PROFILE + '/' + this.employid, responseupdateemployprofile);
  }

}
