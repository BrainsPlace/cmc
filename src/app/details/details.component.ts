import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  events$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => this.events$ = data
    )
  }

}
