import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabChangeEventService {

  private fooSubject = new Subject<any>();

  publishEvent() {
    this.fooSubject.next();
  }

  getObservable(): Subject<any> {
    return this.fooSubject;
  }

  constructor() { }
}
