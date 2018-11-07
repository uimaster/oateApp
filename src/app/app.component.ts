import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  constructor( private router: Router) {}

  ngOnInit() {
    // if(this.isLoggedIn === true) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
}
