import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDatafile(): any {
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
    return this.http.get('https://raw.githubusercontent.com/BrainsPlace/demo/master/db.json')
  }

  getEvents(): any {
    return this.http.get('https://raw.githubusercontent.com/BrainsPlace/demo/master/db.json')
  }   
}
