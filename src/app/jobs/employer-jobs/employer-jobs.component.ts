import { Component, OnInit } from '@angular/core';
import { EmployerJobsService } from '../services/employer-jobs.service';
import { JobdetailResponse, JobdetailsResponseData } from './employerjobs.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-jobs',
  templateUrl: './employer-jobs.component.html',
  styleUrls: ['./employer-jobs.component.css']
})
export class EmployerJobsComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  jobData: Observable<JobdetailResponse>;
  jobdetailsData: JobdetailsResponseData;

  constructor(
    private router: Router,
    private employerjobservice: EmployerJobsService
    ) { }

  ngOnInit() {
    this.getemployerjobdetails();
  }

  getemployerjobdetails() {
    this.employerjobservice.employerjobs().subscribe(
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
