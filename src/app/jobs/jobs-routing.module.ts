import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { EmployerJobsComponent } from './employer-jobs/employer-jobs.component';

const routes: Routes = [
  {
    path: '', 
    component: JobsComponent,  
    children: [
      
          { path: 'add-job', component: PostJobComponent},
          { path: 'edit-job', component: EditJobComponent },
          { path: 'jobs-details', component: EmployerJobsComponent },
          { path: 'job-details/:id', component: JobDetailsComponent }
       
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
