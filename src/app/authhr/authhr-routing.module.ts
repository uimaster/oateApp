import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrloginComponent } from './hrlogin/hrlogin.component';

const routes: Routes = [
  { path: '', component: HrloginComponent },
  { path: 'hrlogin', component: HrloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthhrRoutingModule { }
