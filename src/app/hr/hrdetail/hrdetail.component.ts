import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { HrJobDetailSerivce } from '../service/jobdetail.service';

@Component({
  selector: 'app-hrdetail',
  templateUrl: './hrdetail.component.html',
  styleUrls: ['./hrdetail.component.css']
})
export class HrdetailComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  public jid: any;
  detailsData = [];
  skills = [];

  constructor( private hrjobdetailservice: HrJobDetailSerivce, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.jid = params.id;
     // console.log(this.jid);
    });
    this.getHrjobdetail();
  }

  getHrjobdetail(){
     this.hrjobdetailservice.jobDetail(this.jid).subscribe(
      (res: any) => {
        if(res && res.statusCode === 200){
          this.detailsData = res.entities;
          this.successMessage = res.message;
          this.showSuccess = true;   
          console.log(this.detailsData); 
          this.getSkills(this.detailsData[0].skills);                  
        }else {
          this.errorMessage = res.message;
          this.showError = true;         
        }
       } 
     );
  }
  getSkills(data){
    for(var i = 0; i< data.length; i ++) {
      //console.log(data[i]);
      this.skills.push(data[i].skill);
    }
    //console.log('skills', this.skills);
  }

}
