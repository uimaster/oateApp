import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagehrRoutingModule } from './managehr-routing.module';
import { AddhrComponent } from './addhr/addhr.component';
import { RemovehrComponent } from './removehr/removehr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';
import { ManagehrComponent } from './managehr/managehr.component';
import { SharedModule } from '../shared/shared.module';
import { HrdetailsService } from './services/hrdetails.service';

@NgModule({
  imports: [
    CommonModule,
    ManagehrRoutingModule,
    SharedModule
  ],
  declarations: [AddhrComponent, RemovehrComponent, HrdetailsComponent, ManagehrComponent],
  providers: [HrdetailsService]
})
export class ManagehrModule { }
