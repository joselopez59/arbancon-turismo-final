import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AlojamientosService } from '../alojamientos.service';

@Component({
  selector: 'app-alojamiento-detail',
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.scss'],
})

export class AlojamientoDetailComponent implements OnInit {

  public alojamiento: any = {};
  componentProps: object;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private alojamientosService: AlojamientosService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.alojamientosService.getAlojamiento(id)
    .subscribe(result => {
      this.alojamiento = result.data.alojamiento;
      this.makeComponentProps();
    });
  }

  makeComponentProps(): void {
    this.componentProps = {
      title: this.alojamiento.name,
      propietario: this.alojamiento.legals[0].propietario,
      calle: this.alojamiento.legals[0].calle,
      localidad: this.alojamiento.legals[0].localidad,
      provincia: this.alojamiento.legals[0].provincia,
      gmapsURL: this.alojamiento.legals[0].gmapsURL,
      tel: this.alojamiento.legals[0].telefono,
      mail: this.alojamiento.legals[0].mail,
      buttons: this.alojamiento.footers
    };
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
