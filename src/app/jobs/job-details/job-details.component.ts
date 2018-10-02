import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JobDetailSerivce } from '../services/job-detail.service';
import { ActivatedRoute } from '@angular/router';

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
  jid: any;
  
  constructor(
    private route: ActivatedRoute,
    private jobdetailservice: JobDetailSerivce
    ) { this.route.params.subscribe( params => console.log(params) ); }

  ngOnInit() {
  this.getjobdetails();
  this.jid = +this.route.snapshot.paramMap.get('id');
  console.log(this.jid);
  }
  
  getjobdetails(){
   this.jobdetailservice.Jobdetails(this.jid).subscribe(

   )
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
