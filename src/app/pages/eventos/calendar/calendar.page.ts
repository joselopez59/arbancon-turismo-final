import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { EventosService } from '../eventos.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {

    this.eventosService.getCalendarEventos()
    // tslint:disable-next-line: deprecation
    .subscribe(result => {
      this.eventSource = this.convertDate(result.data.eventos);
    });
  }

  convertDate(result) {
    const newEventArray = [];
    for (const item of result) {
      let newEndTime = item.endTime;
      if (!item.endTime) {
        newEndTime = item.startTime;
      }
      const newEvent = {
        title: item.title,
        startTime: new Date(item.startTime),
        endTime: new Date(newEndTime),
        allDay: item.allDay
      };
      newEventArray.push(newEvent);
    }
    return newEventArray;
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

   // Selected date reange and hence title changed
   onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async onEventSelected(event) {
  //  console.log('onEventSelected');
  //  console.log(event.title);
  //  console.log(event.subtitle);
  //  console.log(event.startTime);
  }
}
