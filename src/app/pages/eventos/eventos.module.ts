import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';

import { EventosPageRoutingModule } from './eventos-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { EventosPage } from './eventos.page';
import { CalendarPage } from './calendar/calendar.page';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventosPageRoutingModule,
    ExpandableModule,
    NgCalendarModule
  ],
  declarations: [
    EventosPage,
    CalendarPage
  ]
})

export class EventosPageModule {}
