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
  public expanded = false;

  constructor(
    public gastronomiaService: GastronomiaService
  ) { }

  ngOnInit() {

    this.gastronomiaService.getGastronomias()
    .subscribe(result => {
      // console.log(result.data.getGastronomias[0]);
      this.gastronomias = result.data.getGastronomias[0].gastronomias;
      this.headText = result.data.getGastronomias[0].headText;
      // console.log(this.gastronomias[0].name);
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
