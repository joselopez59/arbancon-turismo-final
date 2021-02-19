import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { GastronomiaPage } from './gastronomia.page';
import { GastronomiaDetailComponent } from './gastronomia-detail/gastronomia-detail.component';
import { OfertasComponent } from './ofertas/ofertas.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GastronomiaPageRoutingModule,
    ExpandableModule
  ],
  declarations: [
    GastronomiaPage,
    GastronomiaDetailComponent,
    OfertasComponent
  ]
})

export class GastronomiaPageModule {}
