import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';

import { ActividadesPageRoutingModule } from './actividades-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { ActividadesPage } from './actividades.page';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { MapaComponent } from './mapa/mapa.component';
// import {NgxLeafletLocateModule} from '@runette/ngx-leaflet-locate';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActividadesPageRoutingModule,
    ExpandableModule,
    MarkdownModule.forChild(),
    SharedDirectivesModule
  ],
  declarations:  [
    ActividadesPage,
    ActividadDetailComponent,
    MapaComponent
   ]
})

export class ActividadesPageModule {}
