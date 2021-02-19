import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})

export class ActividadesPage implements OnInit {

  headText = '';
  public expanded = false;
  public actividades: any[] = [];

  constructor(
    private actividadesService: ActividadesService
  ) { }

  ngOnInit() {
    // console.log("ngOnInit()");
    this.actividadesService.getActividades()
    .subscribe(result => {
      // console.log('result', result);
      this.actividades = result.data.getActividades[0].actividades;
      this.headText = result.data.getActividades[0].headText;
      // console.log('this.actividades', this.actividades);
    });
  }

  expandHeader() {
    // console.log('expandHeader()');
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }
}
