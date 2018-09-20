import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  })
export class DashboardComponent implements OnInit {

  data: any;
  employeData = [];

  constructor() { 



    this.data = {
      labels: ['Applied', 'Invited', 'Shortlisted', 'Interview', 'Rejected'],
      datasets: [
          {
              label: 'Dashboard Chart',
              width: 10,
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [18, 15, 13, 11, 1]
          }
       ]
  }



  }

  ngOnInit() {
    
  }


}
