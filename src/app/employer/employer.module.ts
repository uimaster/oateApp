import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { HrlistComponent } from './hrlist/hrlist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule
  ],
  declarations: [EmployerComponent, DashboardComponent, PersonalDetailsComponent, HrlistComponent]
})
export class EmployerModule { }
