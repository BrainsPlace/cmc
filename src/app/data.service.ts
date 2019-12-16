import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsonData } from '../assets/db.json'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { console.log(jsonData);}

  getOverview() {
    return jsonData.overview;
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
    //return this.http.get('http://localhost:3000/overview')
  }

  getEvents() {
    return jsonData.events;
    //return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/events')
    //return this.http.get('http://localhost:3000/events')
  } 

  getCoordsFromAddress(address: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' 
    + address 
    + '&key=AIzaSyAEGGW-_erhOI1Xb4fOPQIcO7k7Hvc_ois')
  }
  
}
