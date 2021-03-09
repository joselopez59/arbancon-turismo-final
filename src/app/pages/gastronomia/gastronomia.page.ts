import { Component, OnInit } from '@angular/core';
import { GastronomiaService } from './gastronomia.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.page.html',
  styleUrls: ['./gastronomia.page.scss'],
})
export class GastronomiaPage implements OnInit {

  public gastronomias: [] = [];
  headText = '';

  constructor(
    public gastronomiaService: GastronomiaService
  ) { }

  ngOnInit() {

    this.gastronomiaService.getGastronomias()
    // tslint:disable-next-line: deprecation
    .subscribe(result => {
      // console.log(result.data.getGastronomias[0]);
      this.gastronomias = result.data.getGastronomias[0].gastronomias;
      this.headText = result.data.getGastronomias[0].headText;
    });
  }
}
