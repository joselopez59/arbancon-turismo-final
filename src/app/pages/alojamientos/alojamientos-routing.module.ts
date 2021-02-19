import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';

import { AlojamientosPage } from './alojamientos.page';
import { EscapadasComponent } from './escapadas/escapadas.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosPage
  },
  {
    path: 'escapadas',
    component: EscapadasComponent
  },
  {
    path: ':id',
    component: AlojamientoDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientosPageRoutingModule {}
