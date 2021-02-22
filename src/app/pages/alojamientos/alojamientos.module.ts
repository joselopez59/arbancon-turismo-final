import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AlojamientosPageRoutingModule } from './alojamientos-routing.module';
import { AlojamientosPage } from './alojamientos.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { ListItemModule } from './../../shared-components/list-item/list-item.module';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';
import { ModalPageModule } from './../../modal/modal.module';
import { EscapadasComponent } from './escapadas/escapadas.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AlojamientosPageRoutingModule,
    HeaderExpandableModule,
    ListItemModule,
    ModalPageModule
  ],
  declarations: [
    AlojamientosPage,
    AlojamientoDetailComponent,
    EscapadasComponent
  ]
})

export class AlojamientosPageModule { }
