import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './employer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrlistComponent } from './hrlist/hrlist.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { EditjobsComponent } from './editjobs/editjobs.component';

const routes: Routes = [
  {path:'', component: EmployerComponent,
    children: [
      {
        path:'', children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'hrlist', component:HrlistComponent},
          {path: 'personal-details', component:PersonalDetailsComponent},
          {path: 'post-jobs', component:JobsComponent},
          {path: 'update-jobs', component: EditjobsComponent}          
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
