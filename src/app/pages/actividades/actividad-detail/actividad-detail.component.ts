import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      });
  }
}
