import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WheaterService {

  constructor(private http: HttpClient) { }

  basePath = 'https://api.openweathermap.org/data/2.5/weather?q=arbancon&appid=bcb1205e58d5edb65c1502281e25273f&lang=sp&units=metric';

  getWheater(): Observable<any> {

    return this.http
      .get(this.basePath);
  }

}
