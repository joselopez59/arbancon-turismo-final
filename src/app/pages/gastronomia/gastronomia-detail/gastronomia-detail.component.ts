import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { GastronomiaService } from '../gastronomia.service';

@Component({
  selector: 'app-gastronomia-detail',
  templateUrl: './gastronomia-detail.component.html',
  styleUrls: ['./gastronomia-detail.component.scss'],
})
export class GastronomiaDetailComponent implements OnInit {

  public gastronomia: any = {};
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
    private gastronomiaService: GastronomiaService,
    private inAppBrowser: InAppBrowser,
  ) {}

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gastronomiaService.getGastronomia(id)
    // tslint:disable-next-line: deprecation
    .subscribe(response => {
      this.gastronomia = response.data.gastronomia;
      this.makeComponentProps();
    });
  }

  makeComponentProps(): void {
    this.componentProps = {
      title: this.gastronomia.name,
        propietario: this.gastronomia.legal[0].propietario,
        calle: this.gastronomia.legal[0].calle,
        localidad: this.gastronomia.legal[0].localidad,
        provincia: this.gastronomia.legal[0].provincia,
        gmapsURL: this.gastronomia.legal[0].gmapsURL,
        tel: this.gastronomia.legal[0].tel,
        mail: this.gastronomia.legal[0].mail,
        buttons: this.gastronomia.footers
    };
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
