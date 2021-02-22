import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AlojamientosPageRoutingModule } from './alojamientos-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { AlojamientosPage } from './alojamientos.page';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';
// import { ModalPageModule } from './../../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AlojamientosPageRoutingModule,
    ExpandableModule,
    // ModalPageModule
  ],
  declarations: [
    AlojamientosPage,
    AlojamientoDetailComponent,
    EscapadasComponent
  ]
})

export class AlojamientosPageModule {}
