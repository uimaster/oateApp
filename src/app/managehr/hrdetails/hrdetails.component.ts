import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    
  }



}
