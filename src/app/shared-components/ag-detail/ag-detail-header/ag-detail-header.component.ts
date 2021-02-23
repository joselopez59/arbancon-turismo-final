import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/shared-components/ag-detail/modal/modal.page';

@Component({
  selector: 'app-ag-detail-header',
  templateUrl: './ag-detail-header.component.html',
  styleUrls: ['./ag-detail-header.component.scss'],
})
export class AgDetailHeaderComponent implements OnInit {

  @Input() name: string;
  @Input() componentProps: object;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: this.componentProps
    });
    return await modal.present();
  }
}
