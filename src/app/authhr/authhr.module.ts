import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthhrRoutingModule } from './authhr-routing.module';
import { HrloginComponent } from './hrlogin/hrlogin.component';
import { AuthHrService } from './auth.hrservice';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthhrRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HrloginComponent],
  providers: [AuthHrService]
})
export class AuthhrModule { }
