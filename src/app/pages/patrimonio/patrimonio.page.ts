import { Component, OnInit } from '@angular/core';

import { PatrimonioService } from './patrimonio.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  // env = environment;
  patrimonios: any[] = [];
  headText = '';
  expanded = false;

  constructor(
    private patrimonioService: PatrimonioService
  ) {}

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(result => {
      this.patrimonios = result.data.getPatrimonios[0].patrimonios;
      this.headText = result.data.getPatrimonios[0].headText;
      // console.log('patrimonios', this.patrimonios[0].id);
      // console.log('result', result.data.getPatrimonios[0].patrimonios);
      // console.log('headText', this.headText);
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
