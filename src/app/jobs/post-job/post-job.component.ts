import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PostJobService } from '../services/postjob.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  public postJobForm: FormGroup;
  submitted = false;
  showSuccess = false;
  date1 = new Date();
  date2 = new Date();

  constructor(
    private postjobservice: PostJobService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.postJobForm = this.fb.group({
      appliedCount: [''],
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

  // convenience getter for easy access to form fields
  get f() { return this.postJobForm.controls; }

  addpostjob(formData){

    this.submitted = true;
    if (this.postJobForm.invalid) {
      console.log('Form is invalid');
      return;
    } else {

    this.postjobservice.addjobdata(formData).subscribe(
      (res: any) => {
       if (res && res.statusCode === 200) {
        // this.successMessage = res.message;
        this.showSuccess = true;
       }
      }, error => {
        this.showSuccess = false;
      });
  }
}

cancelUpdate() {
  this.router.navigate(['/jobs/jobs-details']);
}

}
