import { Component, OnInit } from '@angular/core';
import { EscapadasService } from 'src/app/pages/alojamientos/escapadas.service';
@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.component.html',
  styleUrls: ['./escapadas.component.scss'],
})
export class EscapadasComponent implements OnInit {

  escapadas: any[] = [];
  headText: string;
  constructor( private escapadasService: EscapadasService ) { }

  ngOnInit() {
    this.escapadasService.getEscapadas()
    // tslint:disable-next-line: deprecation
    .subscribe(result => {
      // console.log(result);
      this.escapadas = result.data.getEscapadas[0].escapadas;
      this.headText = result.data.getEscapadas[0].headText;
    });
  }

}
