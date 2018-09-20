import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobsComponent } from './jobs.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SharedModule } from '../shared/shared.module';
import { JobDetailsService } from './services/job-details.service';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ],
  declarations: [JobsComponent, JobDetailsComponent, EditJobComponent, PostJobComponent],
  providers: [JobDetailsService]
})
export class JobsModule { }
