import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from '../services/job-details.service';
import { JobdetailResponse, JobdetailsResponseData } from './jobdetails.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  jobData: Observable<JobdetailResponse>;
  jobdetailsData: JobdetailsResponseData;

  constructor(private jobdetailservice: JobDetailsService) { }

  ngOnInit() {
    this.getemployerjobdetails();
  }

  getemployerjobdetails() {
    this.jobdetailservice.employerjobs().subscribe(
      (res: JobdetailResponse) => {
        if(res && res.statusCode === 200){
          this.successMessage = res.message;
          this.showSuccess = true;
          this.jobdetailsData = res.entities;  
          console.log(this.jobdetailsData);        
        }else {
          this.errorMessage = res.message;
          this.showError = true;         
        }
      }
    );
  }

  deleteData(id){
   console.log(id);
  }

}
