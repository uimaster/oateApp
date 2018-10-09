import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagehrComponent } from './managehr/managehr.component';
import { AddhrComponent } from './addhr/addhr.component';
import { RemovehrComponent } from './removehr/removehr.component';
import { HrdetailsComponent } from './hrdetails/hrdetails.component';
import { ListdetailhrComponent } from './listdetailhr/listdetailhr.component';

const routes: Routes = [
  {
    path: '',
    component: ManagehrComponent,
    children: [
      { path:'add-hr', component: AddhrComponent },
      { path:'remove-hr', component: RemovehrComponent },
      { path:'hr-details', component: HrdetailsComponent },
      { path:'managehr/hrdetail/:hrid', component: ListdetailhrComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagehrRoutingModule { }
