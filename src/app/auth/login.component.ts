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
  errorMessage: string | null;
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
          
          this.empData = res.entity;
          localStorage.setItem('token', this.empData.token);
          localStorage.setItem('contactPersonName', this.empData.contactPersonName);
          console.log(this.empData);
          this.router.navigate(['employer']);

        }else{
          alert(res.message);
        }

      });

    }

        // alert(loginForm);
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({       
      emailId : ['', Validators.required],
      password: ['', Validators.required],
      remember: [0,]
    });
  }

}
