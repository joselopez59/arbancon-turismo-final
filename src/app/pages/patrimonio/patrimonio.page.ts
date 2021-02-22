import { Component, OnInit } from '@angular/core';

import { PatrimonioService } from './patrimonio.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  patrimonios: any[] = [];
  headText: string;

  constructor(
    private patrimonioService: PatrimonioService
  ) {}

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(result => {
      this.patrimonios = result.data.getPatrimonios[0].patrimonios;
      this.headText = result.data.getPatrimonios[0].headText;
    });
  }
}
