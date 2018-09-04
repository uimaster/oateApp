import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }
 
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(loginForm){
        // alert(loginForm);
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({      
      username : ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(5)] 
    });
  }

}
