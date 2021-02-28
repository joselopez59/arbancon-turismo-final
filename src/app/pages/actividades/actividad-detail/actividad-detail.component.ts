import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.scss'],
})
export class ActividadDetailComponent implements OnInit {

  actividad: any = '';
  imgURL = '';
  showSuperTabs = false;
  @ViewChild('imageTop', { read: ElementRef }) imageTop: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadesService: ActividadesService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.actividadesService.getActividad(id)
      .subscribe(result => {
        this.actividad = result.data.actividad;
        // console.log(this.actividad);
        this.imgURL = result.data.actividad.detail_img.url;
        if (this.actividad.actividadSegments.length !== 0)  {
          this.showSuperTabs = true;
          // console.log(result.data.actividad.actividadSegments[3].segm_Img.url);
          this.imgURL = this.actividad.actividadSegments[0].segm_Img.url;
        }
      });
  }

  onTabChange(event) {
    const tab = event.detail.index;
    this.imgURL = this.actividad.actividadSegments[tab].segm_Img.url;
    this.fadeImage();
  }

  fadeImage() {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.imageTop.nativeElement)
      .duration(500)
      .fromTo('opacity', '0', '1');

    loadingAnimation.play();
  }

}
