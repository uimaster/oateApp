import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JobDetailSerivce } from '../services/job-detail.service';
import { ActivatedRoute } from '@angular/router';
import { JobdetailResponse, JobdetailsResponseData } from '../employer-jobs/employerjobs.model';
;

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
  public jid: any;
  jobData: Observable<JobdetailResponse>;
  jobdetailsData: JobdetailsResponseData;
  
  constructor(
    private route: ActivatedRoute,
    private jobdetailservice: JobDetailSerivce
    ) { }

  ngOnInit() {  
  this.route.params.subscribe( params => {
    this.jid = params.id;
  });
  this.getjobdetails();  
  }
  
  getjobdetails(){ 
  this.jobdetailservice.Jobdetails(this.jid).subscribe(
     (res: any) => {
      if(res && res.statusCode === 200){
        this.successMessage = res.message;
        this.showSuccess = true;
        this.jobdetailsData = res.entity;  
        // console.log(this.jobdetailsData);        
      }else {
        this.errorMessage = res.message;
        this.showError = true;         
      }
     }   
   );   
  }

  // getemployerjobdetails() {
  //   this.jobdetailservice.employerjobs().subscribe(
  //     (res: JobdetailResponse) => {
  //       if(res && res.statusCode === 200){
  //         this.successMessage = res.message;
  //         this.showSuccess = true;
  //         this.jobdetailsData = res.entities;  
  //         console.log(this.jobdetailsData);        
  //       }else {
  //         this.errorMessage = res.message;
  //         this.showError = true;         
  //       }
  //     }
  //   );
  // }

  // deleteData(id){
  //  console.log(id);
  // }

}
