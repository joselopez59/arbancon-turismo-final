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

  // testEvento = {
  //   title: 'test',
  //   startTime: new Date(),
  //   endTime: new Date(),
  //   allDay: true
  // };

  // eventSource = [
  //   {
  //     title: 'test',
  //     subtitle: 'sub',
  //     startTime: new Date(),
  //     endTime: new Date(),
  //   },
  //   {
  //     title: 'test2',
  //     startTime: new Date('januar 16, 2021 04:00:00'),
  //     endTime: new Date('januar 17, 2021 04:00:00'),
  //     allDay: true
  //   },
  //   {
  //     title: 'test3',
  //     startTime: new Date('februar 3, 2021 04:00:00'),
  //     endTime: new Date('februar 3, 2021 05:00:00'),
  //     allDay: true
  //   },
  // ];

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
   console.log('onEventSelected');
   console.log(event.title);
   console.log(event.subtitle);
   console.log(event.startTime);
  }
}
