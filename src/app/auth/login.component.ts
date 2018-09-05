import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest, LoginResponse } from './user.model';
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
    alert('hh');
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    if(this.loginForm.valid){
     
      this.authservice.login(formData).subscribe((res:LoginResponse) => {

        if(res && res.status === '200'){

          console.log(res);

        }else{
          alert(res.message);
        }

      });

    }

        // alert(loginForm);
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({       
      username : ['', Validators.required],
      password: ['', Validators.required] 
    });
  }

}
