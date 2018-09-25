import { Component, OnInit } from '@angular/core';
import { HrdetailsService } from '../services/hrdetails.service';
import { HrdetailResponse, HrdetailResponseData } from '../hrdetails/hrdetails.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hrdetails',
  templateUrl: './hrdetails.component.html',
  styleUrls: ['./hrdetails.component.css']
})
export class HrdetailsComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  hrData: Observable<HrdetailResponse>;
  hrdetailsData: HrdetailResponseData;

  constructor(private hrdetailservice: HrdetailsService) { }

  ngOnInit() {
    this.getAllhrdetails();
  }

  getAllhrdetails(){
      this.hrdetailservice.allhrdetails().subscribe(
        (res: HrdetailResponse) => {
          if(res && res.statusCode === 200){
            this.successMessage = res.message;
            this.showSuccess = true;
            this.hrdetailsData = res.entities;  
            console.log(this.hrdetailsData);    
          }else{
            this.errorMessage = res.message;
            this.showError = true;  
          }
        }
      )
  }

}
