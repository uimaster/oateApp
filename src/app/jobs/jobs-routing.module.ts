import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditJobComponent } from './edit-job/edit-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {
    path: '', 
    component: JobsComponent,  
    children: [
      
          { path: 'add-job', component: PostJobComponent},
          { path: 'edit-job', component: EditJobComponent },
          { path: 'jobs-details', component: JobDetailsComponent }
       
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
