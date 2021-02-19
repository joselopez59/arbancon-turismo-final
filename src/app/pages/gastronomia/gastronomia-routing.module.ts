import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastronomiaDetailComponent } from './gastronomia-detail/gastronomia-detail.component';

import { GastronomiaPage } from './gastronomia.page';
import { OfertasComponent } from './ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaPage
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: ':id',
    component: GastronomiaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaPageRoutingModule {}
