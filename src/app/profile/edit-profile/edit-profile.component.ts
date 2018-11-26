import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EditserviceService } from '../services/editservice.service';
import { PersonalDetailSerivce } from '../services/personaldetail.service';
import { ResponsePersonalDetail, PersonalResponseData } from '../model/personaldetail.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  Msg: string;
  showError = false;
  showSuccess: boolean =  false;
  personaldetailData:Observable<ResponsePersonalDetail>;
  prdetailData: PersonalResponseData;
  employid = localStorage.getItem('empid');
  createdBy: string = localStorage.getItem('contactPersonName');
  submitted = false;
  public editProfileForm: FormGroup;
  window: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private editservice: EditserviceService,
    private personaldetailservice: PersonalDetailSerivce,
    private router: Router;
    ) { }

  ngOnInit() {
    this.getPersonalDetailData();
    // this.route.params.subscribe( params => {
    //   this.employid = params.empid;
    //   console.log(this.employid);
    // });

    this.editProfileForm = this.fb.group({
      companyName: ['', Validators.required],
      contactPersonName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      designation: ['', Validators.required],
      alternateEmailId: ['', Validators.required],
      industryType: ['', Validators.required],
      companyRegistrationNumber: ['', Validators.required],
      gstiNumber: ['', Validators.required],
      employerType: ['', Validators.required],
      officeAddress: this.fb.array([this.getAddress()]),
      eventLocation: ['', Validators.required],
      aboutCompany: ['', Validators.required],
      emailId: ['', Validators.required],
      companyRegistrationDate: [''],
      companyUrl: ['', Validators.required],
      createdAt:[''],
      createdBy: [this.createdBy],
      deleted: [''],
      emailVerified: [''],
      lastLogin: [''],
      alternateMobileNumber: [''],
      companyLogo:['https://manishoate.s3-us-west-2.amazonaws.com/5bed0f93d30de3303036fff9.jpg'],
      id: [''],
      password:[''],
      token: [''],
      updatedAt: [''],
      updatedBy: [''],
      verified:['']
    });

  }
getAddress() {
    return this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      landmark: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required]
    })
  }

  getPersonalDetailData(){
    this.personaldetailservice.PersonalDetail().subscribe(
      (res: ResponsePersonalDetail) => {
        if(res && res.statusCode === 200){
            this.successMessage = res.message;
            this.showSuccess = false;
            this.prdetailData = res.entity;
            const controlArray = <FormArray> this.editProfileForm.get('officeAddress');
            // console.log(this.prdetailData);
            this.editProfileForm.controls['companyName'].setValue(this.prdetailData.companyName);
            this.editProfileForm.controls['emailId'].setValue(this.prdetailData.emailId);
            this.editProfileForm.controls['contactPersonName'].setValue(this.prdetailData.contactPersonName);
            this.editProfileForm.controls['mobileNumber'].setValue(this.prdetailData.mobileNumber);
            this.editProfileForm.controls['alternateEmailId'].setValue(this.prdetailData.alternateEmailId);
            this.editProfileForm.controls['industryType'].setValue(this.prdetailData.industryType);
            this.editProfileForm.controls['companyRegistrationNumber'].setValue(this.prdetailData.companyRegistrationNumber);
            this.editProfileForm.controls['gstiNumber'].setValue(this.prdetailData.gstiNumber);
            this.editProfileForm.controls['employerType'].setValue(this.prdetailData.employerType);
            this.editProfileForm.controls['designation'].setValue(this.prdetailData.designation);
            this.editProfileForm.controls['eventLocation'].setValue(this.prdetailData.designation);
            this.editProfileForm.controls['aboutCompany'].setValue(this.prdetailData.aboutCompany);
            this.editProfileForm.controls['companyUrl'].setValue(this.prdetailData.companyUrl);
            this.editProfileForm.controls['createdBy'].setValue(this.createdBy);
            this.editProfileForm.controls['id'].setValue(this.prdetailData.id);
            controlArray.controls[0].get('address').setValue(this.prdetailData.officeAddress[0].address);
            controlArray.controls[0].get('city').setValue(this.prdetailData.officeAddress[0].city);
            controlArray.controls[0].get('country').setValue(this.prdetailData.officeAddress[0].country);
            controlArray.controls[0].get('landmark').setValue(this.prdetailData.officeAddress[0].landmark);
            controlArray.controls[0].get('pincode').setValue(this.prdetailData.officeAddress[0].pincode);
            controlArray.controls[0].get('state').setValue(this.prdetailData.officeAddress[0].state);
        } else {
          // this.errorMessage = res.message;
          this.showError = true;
        }
      }
    )
  }

// convenience getter for easy access to form fields
get f() { return this.editProfileForm.controls; }

  submitEditProfile(formData) {
    this.submitted = true;
    if (this.editProfileForm.valid) {
      this.editservice.updateProfile(formData).subscribe( res => {
        if (res) {
          if (res.statusCode === 200) {
            this.showSuccess = true;
            setTimeout(() => {
              this.router.navigate(['/profile/personal-details']);
            }, 4000);
          } else {
            this.showSuccess = false;
          }
        }
      })
    } else {
      console.log('Form is invalid!');
    }
  }

  // getEditProfileData(){
  //     this.editservice.updateProfile().subscribe({

  //     });
  // }



}
