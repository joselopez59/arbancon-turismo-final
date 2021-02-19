import { Component, OnInit } from '@angular/core';

import { AlojamientosService } from './alojamientos.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {

  headText = '';
  alojamientos: any[] = [];
  expanded = false;

  constructor(
    private alojamientosService: AlojamientosService
  ) {}

  ngOnInit() {

    this.alojamientosService.getAlojamientos()
    .subscribe(result => {
      this.alojamientos = result.data.getAlojamientos[0].alojamientos;
      this.headText = result.data.getAlojamientos[0].headText;
    });
  }

  expandHeader() {
    // console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
