import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [

     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule'},
     { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
     { path: 'jobs', loadChildren: 'app/jobs/jobs.module#JobsModule'},
     { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},
     { path: 'managehr', loadChildren: 'app/managehr/managehr.module#ManagehrModule'}     

]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
  
  export class AppRouteModule {}