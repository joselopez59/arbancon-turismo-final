import { Component, OnInit } from '@angular/core';

import { GastronomiaService } from '../gastronomia.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  headText = '';
  public expanded = false;
  public ofertas: any = '';

  constructor(
    private ofertasService: GastronomiaService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .subscribe( result => {
        this.ofertas = result.data.getOfertas[0].ofertas;
        this.headText = result.data.getOfertas[0].headText;
        // console.log(result.data.getOfertas[0].ofertas);
      });
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }
}
