import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



export interface event {
  address: string;
  coord_x: number;
  coord_y: number;
  count: number;
  date: string;
  incident: number;
  source: string;
  year: number;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  events: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDatafile().subscribe(
      res => {
        console.log(res.events);
        this.events = res.events;
      }
    )
    // this.events$ = this.data.getEvents();
  }

}
