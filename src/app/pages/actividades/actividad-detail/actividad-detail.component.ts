import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IonSegment, IonSlides } from '@ionic/angular';


import { environment } from 'src/environments/environment';
import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.scss'],
})
export class ActividadDetailComponent implements OnInit {

  env = environment;
  actividad: any = '';
  imgURL = '';
  segmentModel: string;

  @ViewChild(IonSlides) slider: IonSlides;
  @ViewChild(IonSegment) segment: IonSegment;

  slideOpts = {
    // initialSlide: 1,
    // speed: 400
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadesService: ActividadesService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.actividadesService.getActividad(id)
      .subscribe(result => {
        this.actividad = result.data.actividad;
        this.imgURL = result.data.actividad.detail_img.url;
        if (this.actividad.actividadSegments)  {
          // console.log('this.actividad', this.actividad.actividadSegments);
          this.segmentModel = this.actividad.actividadSegments[0].value;
        }
      });
  }

  async onSlideDidChange() {
    console.log('onSlideDidChange');
    this.slider.getActiveIndex().then((val) => {
      console.log(val);
      this.segment.value = String(val);
    });
  }

  onSegmentChange() {
    console.log('onSegmentChange', this.segment.value);
    this.slider.slideTo(+this.segment.value);
  }
}
