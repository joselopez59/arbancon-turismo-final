import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';

import { ActividadesPage } from './actividades.page';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  },
  {
    path: ':id',
    component: ActividadDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ActividadesPageRoutingModule {}
