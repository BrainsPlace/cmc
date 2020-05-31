import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOverview() {
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
    return this.http.get('http://localhost:3000/overview')
  }

  getEvents() {
    return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/events')
  }   
}
