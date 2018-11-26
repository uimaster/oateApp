import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  onSubmit(formData: LoginRequest) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {

      this.authservice.login(formData).subscribe((res: LoginResponse) => {

        if (res && res.statusCode === 200) {
          this.successMessage = res.message;
          this.showSuccess = true;
          this.empData = res.entity;
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', this.empData.token);
          localStorage.setItem('empid', this.empData.id);
          localStorage.setItem('contactPersonName', this.empData.contactPersonName);

          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 4000);

          } else {
            this.errorMessage = res.message;
            this.showError = true;
            localStorage.setItem('isLoggedIn', 'false');
        }

      });

    }


  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailId : new FormControl('', Validators.compose([Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])),
      password: new FormControl('', Validators.required),
      remember: [0]
    });
  }

}
