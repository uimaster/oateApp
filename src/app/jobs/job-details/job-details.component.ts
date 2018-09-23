import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from '../services/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

<<<<<<< HEAD
  token  = localStorage.getItem('token');

  constructor() { }
=======
  constructor(private jobdetailservice: JobDetailsService) { }
>>>>>>> 2cd28ba4d410052070f16ac2dd25cbff5a281c71

  ngOnInit() {
    this.getemployerjobdetails();
  }

  getemployerjobdetails() {
    this.jobdetailservice.employerjobs().subscribe( res => {
      console.log(res);
    });
  }

}
