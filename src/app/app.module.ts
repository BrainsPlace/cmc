import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { HttpClientModule} from '@angular/common/http';
import { CountUpModule } from 'countup.js-angular2';
import { DetailsComponent } from './details/details.component';
import { MatCardModule, MatDividerModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountUpModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
