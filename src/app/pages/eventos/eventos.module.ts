import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';

import { EventosPageRoutingModule } from './eventos-routing.module';
import { EventosPage } from './eventos.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { CalendarPage } from './calendar/calendar.page';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventosPageRoutingModule,
    HeaderExpandableModule,
    NgCalendarModule
  ],
  declarations: [
    EventosPage,
    CalendarPage
  ]
})

export class EventosPageModule {}
