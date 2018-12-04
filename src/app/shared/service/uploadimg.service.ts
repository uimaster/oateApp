import { Injectable } from '@angular/core';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { UPLOAD_IMAGE } from '../../apiurl/api.url';

@Injectable()

export class UploadImageService {

   public errorImgmsg: any;

    constructor(private http: HttpClient) { }

    fileupload(body: any) {

        const formData = new FormData();
        formData.append('image', body.user_image);
        // let headers = new HttpHeaders().set("Content-Type", "application/json");
        // return this.http.post(UPLOAD_IMAGE, formData)
        //     .map((response: Response) => {
        //         return response;
        //     });

    }
  //
  // public handleError(error: any) {
  //     // return new ErrorObservable(error.error);
  //   throw error;
  //   }

}
