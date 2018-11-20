import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest, LoginResponse, LoginResponseData } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthHrService } from '../auth.hrservice';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hrlogin',
  templateUrl: './hrlogin.component.html',
  styleUrls: ['./hrlogin.component.css']
})
export class HrloginComponent implements OnInit {

  loginhrForm: FormGroup;
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
    private authHrservice: AuthHrService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  get f() { return this.loginhrForm.controls; }

  onSubmit(formData: LoginRequest){
    
    this.submitted = true;
    if (this.loginhrForm.invalid) {
      return;
    }
    
    if(this.loginhrForm.valid){
     
      this.authHrservice.login(formData).subscribe((res:LoginResponse) => {
        if(res && res.statusCode === 200){
          this.successMessage = res.message;
          this.showSuccess = true;
          this.empData = res.entity;
          const profileData = this.empData;
          // console.log(res);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', this.empData.token);
          localStorage.setItem('empid', this.empData.id);
          
          setTimeout(() => {
            this.router.navigate(['/hr/hrlist']); 
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
    this.loginhrForm = this.formBuilder.group({       
      emailId : ['', Validators.required],
      password: ['', Validators.required],
      remember: [0,]
    });
  }

}

