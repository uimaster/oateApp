import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { JobDetailSerivce } from '../services/job-detail.service';
import { UpdateJobSerivce } from '../services/update-job.service';
import { JobdetailResponse, JobdetailsResponseData } from '../employer-jobs/employerjobs.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  public jid: any;
  date3 = new Date();
  date4 = new Date();

  jobData: Observable<JobdetailResponse>;
  jobdetailsData: JobdetailsResponseData;

  public editJobForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jobdetailservice: JobDetailSerivce,
    private updatejobservice: UpdateJobSerivce,
    private router: Router
     ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.jid = params.id;
      // console.log(this.jid);
    });
    this.getjobdetails();


    this.editJobForm = this.fb.group({
      eventDate: [''],
      eventLocation: [''],
      id: [''],
      jobDescription: [''],
      lastDateToApply: [''],
      requiredExperience: [''],
      totalRequirement: [''],
    });

  }
    // convenience getter for easy access to form fields
     get f() { return this.editJobForm.controls; }

  getjobdetails(){
    this.jobdetailservice.Jobdetails(this.jid).subscribe(
       (res: any) => {
        if (res && res.statusCode === 200) {

          this.jobdetailsData = res.entity;
          // console.log(this.jobdetailsData);
          this.editJobForm.controls['id'].setValue(this.jobdetailsData.id);
          this.editJobForm.controls['eventLocation'].setValue(this.jobdetailsData.eventLocation);
          this.editJobForm.controls['jobDescription'].setValue(this.jobdetailsData.jobDescription);
          this.editJobForm.controls['lastDateToApply'].setValue(new Date(this.jobdetailsData.lastDateToApply));
          this.editJobForm.controls['eventDate'].setValue(new Date(this.jobdetailsData.eventDate));
          this.editJobForm.controls['requiredExperience'].setValue(this.jobdetailsData.requiredExperience);
          this.editJobForm.controls['totalRequirement'].setValue(this.jobdetailsData.totalRequirement);
        }
       }
     );
    }

    submitEditJob(editJobForm) {
      this.submitted = true;
      if(this.editJobForm.valid) {
        console.log(editJobForm);
        this.updatejobservice.updatejob(editJobForm).subscribe( res => {
          if (res) {
            if (res.statusCode === 200) {
              this.showSuccess = true;
              setTimeout(() => {
                this.router.navigate(['/jobs/jobs-details']);
              }, 4000);
            } else {
              this.showError = true;
            }
          }
        });
      } else {
        console.log('Form is invalid!');
      }
    }

    cancelUpdate() {
      this.router.navigate(['/jobs/jobs-details']);
    }

}
