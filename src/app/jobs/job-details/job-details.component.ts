import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from '../services/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private jobdetailservice: JobDetailsService) { }

  ngOnInit() {
    this.getemployerjobdetails();
  }

  getemployerjobdetails() {
    this.jobdetailservice.employerjobs().subscribe( res => {
      console.log(res);
    });
  }

}
