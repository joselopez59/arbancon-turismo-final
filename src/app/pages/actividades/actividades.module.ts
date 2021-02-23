import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';

import { ActividadesPageRoutingModule } from './actividades-routing.module';
import { ActividadesPage } from './actividades.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { MapaComponent } from './mapa/mapa.component';
// import {NgxLeafletLocateModule} from '@runette/ngx-leaflet-locate';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActividadesPageRoutingModule,
    HeaderExpandableModule,
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
