import { Component, OnInit } from '@angular/core';
import { HrlistService } from '../services/hrlist.service';
import { HrlistResponse, HrlistResponseData } from '../hrlist/hrlist.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hrlist',
  templateUrl: './hrlist.component.html',
  styleUrls: ['./hrlist.component.css']
})
export class HrlistComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  hrData: Observable<HrlistResponse>;
  hrdetailsData: HrlistResponseData;

  constructor(private hrlistservice: HrlistService) { }

  ngOnInit() {
    this.getAllhrdetails();
  }

  getAllhrdetails() {
    this.hrlistservice.allhrdetails().subscribe(
      (res: HrlistResponse) => {
        if (res && res.statusCode === 200){
          this.successMessage = res.message;
          this.showSuccess = true;
          this.hrdetailsData = res.entities;
          console.log(this.hrdetailsData);
        } else {
          this.errorMessage = res.message;
          this.showError = true;
        }
      }
    )
}

}
