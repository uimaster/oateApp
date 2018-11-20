import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  showError = false;
  showSuccess = false;
  personaldetailData:Observable<ResponsePersonalDetail>;
  prdetailData: PersonalResponseData;
  employid = localStorage.getItem('empid');

  public editProfileForm: FormGroup;
 
  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private editservice: EditserviceService,
    private personaldetailservice: PersonalDetailSerivce
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
      companyUrl: [''],
      createdAt:[''],
      createdBy: [''],
      deleted:[''],
      emailVerified:[''],
      lastLogin:[''],
      alternateMobileNumber:[''],
      companyLogo:[''],
      id:[''],
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
            this.showSuccess = true;
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
            this.editProfileForm.controls['createdBy'].setValue(this.prdetailData.createdBy); 
            this.editProfileForm.controls['id'].setValue(this.prdetailData.id); 
            controlArray.controls[0].get('address').setValue(this.prdetailData.officeAddress.address);
            controlArray.controls[0].get('city').setValue(this.prdetailData.officeAddress.city);
            controlArray.controls[0].get('country').setValue(this.prdetailData.officeAddress.country);
            controlArray.controls[0].get('landmark').setValue(this.prdetailData.officeAddress.landmark);
            controlArray.controls[0].get('pincode').setValue(this.prdetailData.officeAddress.pincode);  
            controlArray.controls[0].get('state').setValue(this.prdetailData.officeAddress.state);    
        }else {
          //this.errorMessage = res.message;
          this.showError = true;         
        }
      }
    )
  }


  submitEditProfile(formData){
    if(this.editProfileForm.valid) {
      console.log(formData);
      this.editservice.updateProfile(formData).subscribe( res => {
        if(res) {
          if(res.status === 200){
            
            console.log(res);
          } else {
            console.log(res);
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
