import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Router} from '@angular/router';
import { AppRouteModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
