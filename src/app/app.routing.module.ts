import { RouterModule, Router, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [

     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path:'login', loadChildren: 'app/auth/auth.module#AuthModule'},
     { path: 'employer',  loadChildren: 'app/employer/employer.module#EmployerModule' }     

]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
  
  export class AppRouteModule {}