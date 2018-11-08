import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrlistingComponent } from './hrlisting/hrlisting.component';
import { HrdetailComponent } from './hrdetail/hrdetail.component';
import { HrComponent } from './hr/hr.component';
import { SharedModule } from '../shared/shared.module';
import { HrlistService } from './service/hrlist.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HrlistingComponent, HrdetailComponent, HrComponent],
  providers: [HrlistService]
})
export class HrModule { }
