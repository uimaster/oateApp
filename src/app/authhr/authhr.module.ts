import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthhrRoutingModule } from './authhr-routing.module';
import { HrloginComponent } from './hrlogin/hrlogin.component';
import { AuthHrService } from './auth.hrservice';

@NgModule({
  imports: [
    CommonModule,
    AuthhrRoutingModule
  ],
  declarations: [HrloginComponent],
  providers: [AuthHrService]
})
export class AuthhrModule { }
