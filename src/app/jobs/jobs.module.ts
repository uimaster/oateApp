import { TokenInterceptor } from './../auth/token.interceptor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobsComponent } from './jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SharedModule } from '../shared/shared.module';
import { JobDetailsService } from './services/job-details.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [JobsComponent, JobDetailsComponent, EditJobComponent, PostJobComponent],
  providers: [
    JobDetailsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobsModule { }
