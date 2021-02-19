import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';

import { AlojamientosService } from '../alojamientos.service';
import { ModalPage } from 'src/app/modal/modal.page';


@Component({
  selector: 'app-alojamiento-detail',
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.scss'],
})

export class AlojamientoDetailComponent implements OnInit {

  public alojamiento: any = '';

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
    public modalController: ModalController
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.alojamientosService.getAlojamiento(id)
    .subscribe(result => {
      // console.log('result', result);
      this.alojamiento = result.data.alojamiento;
      // console.log('this.alojamiento', this.alojamiento.legals[0].propietario);
    });
  }

  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: this.alojamiento.name,
        propietario: this.alojamiento.legals[0].propietario,
        calle: this.alojamiento.legals[0].calle,
        localidad: this.alojamiento.legals[0].localidad,
        provincia: this.alojamiento.legals[0].provincia,
        gmapsURL: this.alojamiento.legals[0].gmapsURL,
        tel: this.alojamiento.legals[0].telefono,
        mail: this.alojamiento.legals[0].mail,
        buttons: this.alojamiento.footers
      }
    });
    return await modal.present();
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
