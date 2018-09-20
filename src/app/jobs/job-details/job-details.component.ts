import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from '../services/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers: [JobDetailsService]
})
export class JobDetailsComponent implements OnInit {

  token  = localStorage.getItem('token');

  constructor(private jobdetailservice: JobDetailsService) { }

  ngOnInit() {
    // this.getemployerjobdetails();
  }

  // getemployerjobdetails(){
  //   this.jobdetailservice.employerjobs();
  // }

}
