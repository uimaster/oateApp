import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HrlistService } from '../service/hrlist.service';
import { HrjobsResponse, HrjobsResponseData } from '../model/hrjobs.model';
import { PagerService } from '../../../utils/pager.service';


@Component({
  selector: 'app-hrlisting',
  templateUrl: './hrlisting.component.html',
  styleUrls: ['./hrlisting.component.css']
})
export class HrlistingComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;
  pager: any = {};
  pagedItems: any[];
  jobData: Observable<HrjobsResponse>;
  hrjobsData = [];
  
  constructor(private hrlistservice: HrlistService, private pagerService: PagerService) { }

  ngOnInit() {
    this.HrlistData();
  }

  HrlistData(){
    this.hrlistservice.getHrlistData().subscribe(
      (res: any) => {
        if(res && res.statusCode === 200){
          this.successMessage = res.message;
          this.showSuccess = true;
          this.hrjobsData = res.entities; 
          this.setPage(1);
          // console.log(this.hrjobsData);               
        }else {
          this.errorMessage = res.message;
          this.showError = true;         
        }
      }
    );
  }

  setPage(page: number) {
    // get pager object from service
     this.pager = this.pagerService.getPager(this.hrjobsData.length, page);
    // get current page of items
     this.pagedItems = this.hrjobsData.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
