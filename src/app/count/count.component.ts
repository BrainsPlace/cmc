import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  overview$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getOverview().subscribe(
      data => this.overview$ = data
    )
  console.log('data', this.data);
  }

}
