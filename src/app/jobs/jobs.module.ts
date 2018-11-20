import { TokenInterceptor } from './../auth/token.interceptor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobsComponent } from './jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SharedModule } from '../shared/shared.module';
import { EmployerJobsService } from './services/employer-jobs.service';
import { EmployerJobsComponent } from './employer-jobs/employer-jobs.component';
import { JobDetailSerivce } from './services/job-detail.service';
import { UpdateJobSerivce } from './services/update-job.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [JobsComponent, JobDetailsComponent, EditJobComponent, PostJobComponent, EmployerJobsComponent],
  providers: [
    EmployerJobsService, JobDetailSerivce, UpdateJobSerivce
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobsModule { }
