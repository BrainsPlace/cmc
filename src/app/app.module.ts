import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { DetailsComponent } from './details/details.component';
import { MapsOverviewComponent } from './maps-overview/maps-overview.component';
import { CountUpModule } from 'countup.js-angular2';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    DetailsComponent,
    MapsOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEGGW-_erhOI1Xb4fOPQIcO7k7Hvc_ois'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
