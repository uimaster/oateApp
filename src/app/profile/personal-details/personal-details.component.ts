import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  // profileData = localStorage.getItem('profileData');
  companyName = localStorage.getItem('companyName');
  contactPersonName = localStorage.getItem('contactPersonName');
  designation = localStorage.getItem('designation');
  companyRegistrationNumber = localStorage.getItem('companyRegistrationNumber');
  companyLogo = localStorage.getItem('companyLogo');
  employerType = localStorage.getItem('employerType');
  aboutCompany = localStorage.getItem('aboutCompany');
  officeAddress = localStorage.getItem('officeAddress');
  gstiNumber = localStorage.getItem('gstiNumber');

  constructor() { }

  ngOnInit() {
  }

}
