import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,   
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    FileUploadModule,
    ChartModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule
    
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule { }
