import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditserviceService } from './services/editservice.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, PersonalDetailsComponent, EditProfileComponent],
  providers: [EditserviceService]
})
export class ProfileModule { }
