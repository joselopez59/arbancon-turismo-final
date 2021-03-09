import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/pages/actividades/marker.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})

export class MapaComponent {

  map: L.Map;

  private env = environment;

  constructor( private markerService: MarkerService ) { }

  ionViewDidEnter() {

    this.initMap();
    // this.markerService.makePoisMarkers(this.map);
  }

  initMap() {

    const callejero = L.tileLayer('https://api.mapbox.com/styles/v1/joselopez/cju2smdse0xzk1fp5eoq8v36h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9zZWxvcGV6IiwiYSI6ImNqdTJyeGhmZjBmcG40ZXA4dGJ3Zmw4NHQifQ.TNgZK280-8jEv9GbasCfRg',
    {
      attribution: '©OpenStreetMap, ©Mapbox, Style ©joselopez',
      maxZoom: 22,
    });

    // Cartografía raster del Instituto Geográfico Nacional.
    const topografico = L.tileLayer.wms('http://www.ign.es/wms-inspire/mapa-raster', {
      layers: 'mtn_rasterizado',
      format: 'image/png',
      transparent: false,
      continuousWorld : true,
      attribution: '©Instituto Geográfico Nacional de España',
      maxZoom: 20
    });

    // Ortofotos del Plan Nacional de Ortofotografía Aérea. Máxima actualidad
    const satelite = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
      layers: 'OI.OrthoimageCoverage',
      format: 'image/png',
      transparent: false,
      continuousWorld : true,
      attribution: '©Instituto Geográfico Nacional de España',
      maxZoom: 25
    });

    this.map = new L.Map('mapId').setView([40.965, -3.115], 16);
    // this.map = new L.Map('mapId').setView([40.96404, -3.11249 ], 19);

    callejero.addTo(this.map);
    L.control.scale({imperial: false}).addTo(this.map);

    const baseLayers  = {
      Callejero: callejero,
      Topográfico: topografico,
      Satélite: satelite
    };

    const layerPois = this.createLayer('pois').addTo(this.map);
    // const layerPois = this.createLayer().addTo(this.map);
    // const textLayer = this.createTextLayer().addTo(this.map);
    const layerPoisTur = this.createLayer('poisturismo').addTo(this.map);

    const overlays = {
      '<span id="poiName">Puntos de interés</span>': layerPois,
      '<span id="poiTurismoName">Servicios turísticos</span>': layerPoisTur
    };

    const controlLayers = L.control.layers(
      baseLayers ,
      overlays,
      { collapsed: false }
    );
    // this.map.removeLayer(layerPoisTur);

    controlLayers.addTo(this.map);

    // this.map.on ('zoomend', () => {
    //   const zoomlevel = this.map.getZoom();
    //   console.log('Current Zoom Level =' + zoomlevel);
    // });

    // this.map.on ({
    //   overlayadd: () => {
    //     // console.log('overlayadd');
    //   }
    // });
  }

  createTextLayer() {

    const layer = L.layerGroup();

    this.markerService.getTextPois()
    // tslint:disable-next-line: deprecation
    .subscribe((result: any) => {
      console.log(result);
      for (const poi of result.data.mapTexts) {
        // console.log(poi.name);
        const marker = L.marker(
          [
            poi.lat,
            poi.lon
          ]
        );

        if (poi.iconText) { // poi has text
          console.log('poi.iconText', poi.iconText);
          const text = L.divIcon({
            html: poi.iconText,
            className: 'mapicontext',
          });

          marker.setIcon(text);
        }
        marker.addTo(layer);
      }
    });
    return layer;
  }

  createLayer(layerName: string) {

    const layer = L.layerGroup();

    if (layerName === 'pois') {
      this.markerService.getPois()
      // tslint:disable-next-line: deprecation
      .subscribe((result: any) => {
        // console.log(result);
        this.initLayer(layer, result.data.pois);
      });
    }
    else if (layerName === 'poisturismo') {
      this.markerService.getPoisTurismo()
      // tslint:disable-next-line: deprecation
      .subscribe((result: any) => {
        // console.log(result);
        this.initLayer(layer, result.data.poisTurismos);
      });
    }

    return layer;
  }

  initLayer(layer: L.layerGroup, result: any ) {
    // console.log('initLayer', result);
    for (const poi of result) {
      // console.log(poi.name);
      const marker = L.marker(
        [
          poi.lat,
          poi.lon
        ]
      );

      if (poi.iconMap) { // poi has icon
        // console.log(poi.iconMap.url);
        const icon = L.icon({
          iconUrl: poi.iconMap.url,
          className: 'mapicon'
        });

        marker.setIcon(icon);
      }

      const popUp = L.popup({
        closeButton: false
      })
      .setContent(this.makePopup(poi.name));

      // popUp.setContent(this.makePopup(poi.name));

      marker.bindPopup(popUp);
      marker.addTo(layer);
    }
  }

  makePopup(data: any): string {
    return '' +
      '<div>' + data + '</div>';
  }

  // createLayer(layerName: string) {

  //   const layer = L.layerGroup();

  //   this.markerService.getPois(layerName)
  //   .subscribe((data: any) => {
  //     // console.log(data);
  //     for (const poi of data) {

  //       const marker = L.marker(
  //         [
  //           poi.geometry.coordinates.lat,
  //           poi.geometry.coordinates.lon
  //         ]
  //       );

  //       if (poi.properties.iconMap) { // poi has icon
  //         // console.log(poi.properties.iconMap.url);
  //         const icon = L.icon({
  //           iconUrl: this.env.cmsURL + poi.properties.iconMap.url,
  //           className: 'mapicon'
  //         });

  //         marker.setIcon(icon);
  //       }
  //       marker.bindPopup(this.makePopup(poi.properties.name));
  //       marker.addTo(layer);
  //     }
  //   });
  //   return layer;
  // }



  ionViewWillLeave() {
    // console.log('ionViewWillLeave');
    this.map.remove();
  }

}
