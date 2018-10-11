import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditserviceService } from '../services/editservice.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public editProfileForm: FormGroup;
  public employid: any;


  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private editservice: EditserviceService
    ) { }

  ngOnInit() {

    //this.getEditProfileData();
    this.route.params.subscribe( params => {
      this.employid = params.empid;
      console.log(this.employid);
    });

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
