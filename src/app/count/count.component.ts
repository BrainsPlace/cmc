import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})

export class CountComponent implements OnInit {

  count = 0;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getDatafile().subscribe(
        res => {
          console.log(res.overview);
          this.count = res.overview.sum;
          console.log(this.count);
        }
      );
    }
}
