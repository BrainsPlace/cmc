import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOverview() {
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
    return this.http.get('https://raw.githubusercontent.com/BrainsPlace/demo/master/db.json')
  }

  getEvents() {
    return this.http.get('https://raw.githubusercontent.com/BrainsPlace/demo/master/db.json')
  }   
}
