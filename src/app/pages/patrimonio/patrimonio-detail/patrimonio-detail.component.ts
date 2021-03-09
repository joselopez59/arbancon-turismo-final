import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { PatrimonioService } from '../patrimonio.service';

@Component({
  selector: 'app-patrimonio-detail',
  templateUrl: './patrimonio-detail.component.html',
  styleUrls: ['./patrimonio-detail.component.scss'],
})

export class PatrimonioDetailComponent implements OnInit {

  patrimonio: any = {};
  public imgURL = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private patrimonioService: PatrimonioService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.patrimonioService.getPatrimonio(id)
      // tslint:disable-next-line: deprecation
      .subscribe(result => {
        this.patrimonio = result.data.patrimonio;
        // console.log('this.patrimonio', this.patrimonio.buttons);
        this.imgURL = this.patrimonio.detail_img.url;
      });
  }
}
