import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOverview() {
    return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/overview')
  }

  getEvents() {
    return this.http.get('https://my-json-server.typicode.com/brainsplace/demo/events')
  } 

  getCoordsFromAddress(address: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' 
    + address 
    + '&key=AIzaSyAEGGW-_erhOI1Xb4fOPQIcO7k7Hvc_ois')
  }
}
