import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPage } from './eventos.page';
// import { CalendarioComponent } from './calendario/calendario.component';
import { CalendarPage } from './calendar/calendar.page';

const routes: Routes = [
  {
    path: '',
    component: EventosPage
  },
  // {
  //   path: 'calendario',
  //   component: CalendarPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPageRoutingModule {}
