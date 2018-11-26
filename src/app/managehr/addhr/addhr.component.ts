import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms'
import { AddhrService } from '../services/addhrservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhr',
  templateUrl: './addhr.component.html',
  styleUrls: ['./addhr.component.css']
})
export class AddhrComponent implements OnInit {

  addhrForm: FormGroup;
  submitted = false;
  token: string;
  date = new Date();
  createdby = localStorage.getItem('contactPersonName');
  showSuccess = false;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private addhrservice: AddhrService,
    private router: Router
  ) {  this.token = localStorage.getItem('token'); }

  ngOnInit() {

    this.addhrForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailId: ['',Validators.required],
      address: this.fb.array([this.getAddress()]),
      createdAt: [this.date],
      createdBy: [this.createdby],
      token: [this.token],
      creater: [''],
      deleted: [false],
      id: [''],
      lastLogin: [''],
      password: ['', Validators.required],
      role: ['HR'],
      updatedAt: [this.date],
      updatedBy: ['']
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
    });
  }
    // convenience getter for easy access to form fields
  get f() { return this.addhrForm.controls; }

  saveHr(formData) {
    this.submitted = true;

    if (this.addhrForm.invalid) {
      console.log('Form is invalid');
      return;
    } else {
      this.addhrservice.addHrdata(formData).subscribe ( res => {
        if (res.statusCode === 200) {
          this.showSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/managehr/hr-details']);
          }, 4000);
        } else {
          this.showError = true;
        }
      });
    }
  }

  canceladdhr() {
    this.router.navigate(['/managehr/hr-details']);
  }


}
