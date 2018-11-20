import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { JobDetailSerivce } from '../services/job-detail.service';
import { JobdetailResponse, JobdetailsResponseData } from '../employer-jobs/employerjobs.model';
import { ActivatedRoute } from '@angular/router';

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
  jobData: Observable<JobdetailResponse>;
  jobdetailsData: JobdetailsResponseData;

  public editJobForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
     private jobdetailservice: JobDetailSerivce
     ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.jid = params.id;
      //console.log(this.jid);
    });
    this.getjobdetails();


    this.editJobForm = this.fb.group({
      companyDesc: [''],
      companyLogo: [''],
      companyName: [''],
      companyUrl: [''],
      createdAt: [''],
      createdBy: [''],
      deleted: [''],
      eligibility: [''],
      employerId: [''],
      eventDate: [''],
      eventLocation: [''],
      fromSalary: [''],
      id: [''],
      jobDescription: [''],
      jobLocation: [''],
      jobType: [''],
      lastDateToApply: [''],
      passoutYearBatch: [''],
      position: [''],
      postedJobDate:[''],
      postedJobNumber: [''],
      requiredExperience: [''],
      requiredSkillsMandatory: [''],
      requiredSkillsPreferred: [''],
      specialNoteTitle1: [''],
      specialNoteTitle2: [''],
      specialNoteTitle3: [''],
      specialNotes1: [''],
      specialNotes2: [''],
      specialNotes3: [''],
      toSalary: [''],
      totalRequirement: [''],
      updatedAt: [''],
      updatedBy: [''],
      verifiedByAdmin: [''],
      verifierName: ['']  
    });




  }

  getjobdetails(){    
    this.jobdetailservice.Jobdetails(this.jid).subscribe(
       (res: any) => {
        if(res && res.statusCode === 200){
          this.successMessage = res.message;
          this.showSuccess = true;
          this.jobdetailsData = res.entity; 
          // console.log(this.jobdetailsData);
          this.editJobForm.controls['companyName'].setValue(this.jobdetailsData.companyName); 
          this.editJobForm.controls['companyUrl'].setValue(this.jobdetailsData.companyUrl); 
          this.editJobForm.controls['companyDesc'].setValue(this.jobdetailsData.companyDesc); 
          this.editJobForm.controls['eligibility'].setValue(this.jobdetailsData.eligibility); 
          this.editJobForm.controls['position'].setValue(this.jobdetailsData.position); 
          this.editJobForm.controls['jobLocation'].setValue(this.jobdetailsData.jobLocation);
          this.editJobForm.controls['eventLocation'].setValue(this.jobdetailsData.eventLocation);
          this.editJobForm.controls['jobType'].setValue(this.jobdetailsData.jobType);
          this.editJobForm.controls['employerId'].setValue(this.jobdetailsData.employerId); 
          this.editJobForm.controls['eventDate'].setValue(this.jobdetailsData.eventDate);
          this.editJobForm.controls['requiredExperience'].setValue(this.jobdetailsData.requiredExperience);
          this.editJobForm.controls['requiredSkillsMandatory'].setValue(this.jobdetailsData.requiredSkillsMandatory); 
          this.editJobForm.controls['requiredSkillsPreferred'].setValue(this.jobdetailsData.requiredSkillsPreferred); 
          this.editJobForm.controls['specialNotes1'].setValue(this.jobdetailsData.specialNotes1); 
          this.editJobForm.controls['specialNotes2'].setValue(this.jobdetailsData.specialNotes2); 
          this.editJobForm.controls['specialNotes3'].setValue(this.jobdetailsData.specialNotes3);
          this.editJobForm.controls['toSalary'].setValue(this.jobdetailsData.toSalary);
          this.editJobForm.controls['fromSalary'].setValue(this.jobdetailsData.fromSalary); 
          this.editJobForm.controls['passoutYearBatch'].setValue(this.jobdetailsData.passoutYearBatch); 
          this.editJobForm.controls['totalRequirement'].setValue(this.jobdetailsData.totalRequirement);   
        }else {
          this.errorMessage = res.message;
          this.showError = true;         
        }
       }   
     );   
    }

}
