import { Component } from '@angular/core';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

import { HomePage } from '../pages/home/home.page';
import { AlojamientosPage } from '../pages/alojamientos/alojamientos.page';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia.page';
import { PatrimonioPage } from '../pages/patrimonio/patrimonio.page';
import { ActividadesPage } from '../pages/actividades/actividades.page';
import { EventosPage } from './../pages/eventos/eventos.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage {

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  homePage = HomePage;
  alojamientosPage = AlojamientosPage;
  gastronomiaPage = GastronomiaPage;
  patrimonioPage = PatrimonioPage;
  actividadesPage = ActividadesPage;
  eventosPage = EventosPage;

}
