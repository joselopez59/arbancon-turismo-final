import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
// import { ActionSheetController } from '@ionic/angular';

import { GastronomiaService } from '../gastronomia.service';
// import { environment } from '../../../../environments/environment';
import { ModalPage } from '../../../modal/modal.page';

@Component({
  selector: 'app-gastronomia-detail',
  templateUrl: './gastronomia-detail.component.html',
  styleUrls: ['./gastronomia-detail.component.scss'],
})
export class GastronomiaDetailComponent implements OnInit {

  // env = environment;
  public gastronomia;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private gastronomiaService: GastronomiaService,
    private inAppBrowser: InAppBrowser,
    public modalController: ModalController
  ) {
      this.gastronomia = '';
   }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gastronomiaService.getGastronomia(id)
    .subscribe(response => {
      // console.log(response);
      this.gastronomia = response.data.gastronomia;
      // console.log(this.gastronomia);
    });
  }

  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: this.gastronomia.name,
        propietario: this.gastronomia.legal[0].propietario,
        calle: this.gastronomia.legal[0].calle,
        localidad: this.gastronomia.legal[0].localidad,
        provincia: this.gastronomia.legal[0].provincia,
        gmapsURL: this.gastronomia.legal[0].gmapsURL,
        tel: this.gastronomia.legal[0].tel,
        mail: this.gastronomia.legal[0].mail,
        buttons: this.gastronomia.footers
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
