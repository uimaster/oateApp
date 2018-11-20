import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest, LoginResponse, LoginResponseData } from './user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  userData: Observable<LoginResponse>;
  empData: LoginResponseData;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }
 
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(formData: LoginRequest){
    
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    if(this.loginForm.valid){
     
      this.authservice.login(formData).subscribe((res:LoginResponse) => {
        if(res && res.statusCode === 200){         
          this.successMessage = res.message;
          this.showSuccess = true;
          this.empData = res.entity;
          const profileData = this.empData;
          // console.log(res);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', this.empData.token);
          localStorage.setItem('empid', this.empData.id);
          // localStorage.setItem('profileData', JSON.stringify(this.empData));
          // localStorage.setItem('companyName', this.empData.companyName);
          // localStorage.setItem('companyLogo', this.empData.companyLogo);
          // localStorage.setItem('designation', this.empData.designation);
          // localStorage.setItem('companyRegistrationNumber', this.empData.companyRegistrationNumber);
          // localStorage.setItem('mobileNumber', this.empData.mobileNumber);
          // localStorage.setItem('employerType', this.empData.employerType);
          // localStorage.setItem('emailId', this.empData.emailId);
          // localStorage.setItem('gstiNumber', this.empData.gstiNumber);
          // localStorage.setItem('aboutCompany', this.empData.aboutCompany);
          // localStorage.setItem('officeAddress', this.empData.officeAddress['address']);
          // localStorage.setItem('contactPersonName', this.empData.contactPersonName);
          localStorage.setItem('contactPersonName', this.empData.contactPersonName);
          
          setTimeout(() => {
            this.router.navigate(['/dashboard']); 
          }, 2000);                
           
          } else {
            this.errorMessage = res.message;
            this.showError = true;
            localStorage.setItem('isLoggedIn', 'false');
        }

      });

    }

       
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({       
      emailId : ['', Validators.required],
      password: ['', Validators.required],
      remember: [0,]
    });
  }

}
