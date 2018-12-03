import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehrComponent } from './managehr/managehr.component';
import { AddhrComponent } from './addhr/addhr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';
import { HrlistComponent } from './hrlist/hrlist.component';

const routes: Routes = [
  {
    path: '',
    component: ManagehrComponent,
    children: [
      { path:'add-hr', component: AddhrComponent },     
      { path:'hr-detail', component: HrdetailsComponent },
      { path:'hr-list', component: HrlistComponent }
      // { path:'managehr/hrdetail/:hrid', component: ListdetailhrComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagehrRoutingModule { }
