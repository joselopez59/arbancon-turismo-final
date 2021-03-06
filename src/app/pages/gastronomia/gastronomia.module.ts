import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';
import { GastronomiaPage } from './gastronomia.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { ListItemModule } from 'src/app/shared-components/list-item/list-item.module';
import { GastronomiaDetailComponent } from './gastronomia-detail/gastronomia-detail.component';
import { AgDetailModule } from 'src/app/shared-components/ag-detail/ag-detail.module';
import { FooterDetailModule } from 'src/app/shared-components/footer-detail/footer-detail.module';
import { OfertasComponent } from './ofertas/ofertas.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GastronomiaPageRoutingModule,
    HeaderExpandableModule,
    ListItemModule,
    AgDetailModule,
    FooterDetailModule
  ],
  declarations: [
    GastronomiaPage,
    GastronomiaDetailComponent,
    OfertasComponent
  ]
})

export class GastronomiaPageModule {}
