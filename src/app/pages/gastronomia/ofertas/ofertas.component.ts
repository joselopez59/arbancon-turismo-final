import { Component, OnInit } from '@angular/core';

import { GastronomiaService } from '../gastronomia.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  headText: string;
  public ofertas: [] = [];

  constructor(
    private ofertasService: GastronomiaService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      // tslint:disable-next-line: deprecation
      .subscribe( result => {
        this.ofertas = result.data.getOfertas[0].ofertas;
        this.headText = result.data.getOfertas[0].headText;
      });
  }
}
