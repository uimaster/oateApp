import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { HrlistingComponent } from './hrlisting/hrlisting.component';
import { HrdetailComponent } from './hrdetail/hrdetail.component';

const routes: Routes = [
  {
   path: '',
   component: HrComponent,
   children: [
     {path: 'hrlist', component: HrlistingComponent},
     {path: 'hrdetail/:id', component: HrdetailComponent}
   ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
