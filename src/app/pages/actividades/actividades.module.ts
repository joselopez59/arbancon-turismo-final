import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { MarkdownModule } from 'ngx-markdown';

import { ActividadesPageRoutingModule } from './actividades-routing.module';
import { ActividadesPage } from './actividades.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    ActividadesPageRoutingModule,
    HeaderExpandableModule,
    MarkdownModule.forChild()
  ],
  declarations:  [
    ActividadesPage,
    ActividadDetailComponent,
    MapaComponent
   ]
})

export class ActividadesPageModule {}
