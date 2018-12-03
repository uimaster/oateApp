import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagehrRoutingModule } from './managehr-routing.module';
import { AddhrComponent } from './addhr/addhr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';
import { ManagehrComponent } from './managehr/managehr.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddhrService } from './services/addhrservice';
import { HrlistComponent } from './hrlist/hrlist.component';
import { HrlistService } from './services/hrlist.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagehrRoutingModule,
    SharedModule
  ],
  declarations: [AddhrComponent, HrdetailsComponent, ManagehrComponent, HrlistComponent],
  providers: [AddhrService, HrlistService]
})
export class ManagehrModule { }
