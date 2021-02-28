import { Component } from '@angular/core';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

import { HomePage } from '../pages/home/home.page';
import { AlojamientosPage } from '../pages/alojamientos/alojamientos.page';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia.page';
import { PatrimonioPage } from '../pages/patrimonio/patrimonio.page';
import { ActividadesPage } from '../pages/actividades/actividades.page';
import { EventosPage } from './../pages/eventos/eventos.page';
import { TabChangeEventService } from '../shared-components/tab-change-event.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage {

  homePage = HomePage;
  alojamientosPage = AlojamientosPage;
  gastronomiaPage = GastronomiaPage;
  patrimonioPage = PatrimonioPage;
  actividadesPage = ActividadesPage;
  eventosPage = EventosPage;

  constructor(
    public events: TabChangeEventService
    ) { }

  onTabChange(event) {
    // console.log('onTabChangeTabsPage');
    this.events.publishEvent();
  }

}
