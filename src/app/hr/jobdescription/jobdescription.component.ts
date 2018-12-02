import { Component, OnInit } from '@angular/core';
import { JobDescSerivce } from '../service/jobdesc.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobdescResponse, JobdescResponseData } from '../model/jobdescription.model';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {

  public jid: any; 
  public errorMessage = '';
  public successMessage = '';
  public showError = false;
  public showSuccess = false;
  public jobData: Observable<JobdescResponse>;
  public jobdescData: JobdescResponseData;

  constructor(
    private route: ActivatedRoute,
    private jobdescservice: JobDescSerivce
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.jid = params.id;
    });
    this.getjobdescription(); 
  }

  getjobdescription(){
    this.jobdescservice.Jobdesc(this.jid).subscribe((res: JobdescResponse) => {
      if(res && res.statusCode === 200){
        this.successMessage = res.message;
        this.showSuccess = true;
        this.jobdescData = res.entity;         
        //console.log(this.jobdescData);               
      }else {
        this.errorMessage = res.message;
        this.showError = true; 
      }     
    }, error =>{
       console.log('Something went wrong!'); 
    });
  }


}
