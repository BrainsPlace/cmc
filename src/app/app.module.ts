import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { HttpClientModule} from '@angular/common/http';
import { CountUpModule } from 'countup.js-angular2';
import { DetailsComponent } from './details/details.component';
import { MatCardModule, MatDividerModule } from '@angular/material';
import { MapsOverviewComponent } from './maps-overview/maps-overview.component';
import { AgmCoreModule } from '@agm/core';

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
    HttpClientModule,
    CountUpModule,
    MatCardModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEGGW-_erhOI1Xb4fOPQIcO7k7Hvc_ois'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
