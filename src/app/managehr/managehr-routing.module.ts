import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehrComponent } from './managehr/managehr.component';
import { AddhrComponent } from './addhr/addhr.component';
import { RemovehrComponent } from './removehr/removehr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';

const routes: Routes = [
  {
    path: '',
    component: ManagehrComponent,
    children: [
      { path:'add-hr', component: AddhrComponent },
      { path:'remove-hr', component: RemovehrComponent },
      { path:'hr-details', component: HrdetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagehrRoutingModule { }
