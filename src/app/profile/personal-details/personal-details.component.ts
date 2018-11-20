import { Component, OnInit } from '@angular/core';
import { PersonalDetailSerivce } from '../services/personaldetail.service';
import { ResponsePersonalDetail, PersonalResponseData } from '../model/personaldetail.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  personaldetailData:Observable<ResponsePersonalDetail>;
  prdetailData: PersonalResponseData;
  employid = localStorage.getItem('empid');
  officeAddress = localStorage.getItem('officeAddress');


  constructor(private personaldetailservice: PersonalDetailSerivce) { }

  ngOnInit() {
    this.getPersonalDetailData();
  }

  getPersonalDetailData(){
    this.personaldetailservice.PersonalDetail().subscribe(
      (res: ResponsePersonalDetail) => {
        if(res && res.statusCode === 200){
            this.successMessage = res.message;
            this.showSuccess = true;
            this.prdetailData = res.entity;
            // console.log(this.prdetailData);        
        }else {
          //this.errorMessage = res.message;
          this.showError = true;         
        }
      }
    )
  }

}
