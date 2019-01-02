import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  events$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => this.events$ = data
    )
  }

}
