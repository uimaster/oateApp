import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagehrRoutingModule } from './managehr-routing.module';
import { AddhrComponent } from './addhr/addhr.component';
import { RemovehrComponent } from './removehr/removehr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';
import { ManagehrComponent } from './managehr/managehr.component';
import { SharedModule } from '../shared/shared.module';
import { HrdetailsService } from './services/hrdetails.service';
import { ListdetailhrComponent } from './listdetailhr/listdetailhr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddhrService } from './services/addhrservice';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagehrRoutingModule,
    SharedModule
  ],
  declarations: [AddhrComponent, RemovehrComponent, HrdetailsComponent, ManagehrComponent, ListdetailhrComponent],
  providers: [HrdetailsService, AddhrService]
})
export class ManagehrModule { }
