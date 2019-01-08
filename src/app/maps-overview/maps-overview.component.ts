import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maps-overview',
  templateUrl: './maps-overview.component.html',
  styleUrls: ['./maps-overview.component.css']
})
export class MapsOverviewComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  events$: Object;

  
  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => this.events$ = data
    )
  }
}
