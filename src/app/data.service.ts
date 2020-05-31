import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOverview(): Observable<any> {
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
    return this.http.get('http://localhost:3000/overview')
  }

  getEvents() {
    return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/events')
  }   
}
