import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { EventosService } from './eventos.service';
import * as moment from 'moment';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit {

  expanded = false;
  segmentModel = 'proximos';
  eventos: any[] = [];
  eventosAnt: any[] = [];
  headText =
    'El calendario de actividades de Arbancón se ve salpicado a lo largo del año por numerosos eventos culturales, deportivos y festivos.';

  constructor(
    private eventosService: EventosService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    const today = new Date();
    today.setHours(0, 0, 0 , 0);

    this.eventosService.getProximosEventos(today)
    .subscribe(result => {
      this.eventos = result.data.eventos;
    });

    this.eventosService.getEventosPasados(today)
    .subscribe(result => {
      this.eventosAnt = result.data.eventos;
    });

  }

  expandHeader() {

    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

  addToGCalender(evento) {
    const gcURL = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = '&text=' + this.parseString(evento.title);
    const startG = moment(evento.startTime).format('YYYYMMDDTHHmmSS[Z]');
    const dates = '&dates=' + startG + '%2F' + startG;
    const location = '&location=19237+Arbancón,+Guadalajara,+España';
    const details = '&details=' + this.parseString(evento.descr);

    const gCalEvento = gcURL + text + dates + details + location;
    this.openExternalUrl(gCalEvento);
  }

  parseString(inputString: string): string {
    return inputString.replace(/ /g, '+');
  }

  openExternalUrl(url: string) {
    if (url) {
      this.inAppBrowser.create(
        url, '_blank'
      );
    }
  }
}
