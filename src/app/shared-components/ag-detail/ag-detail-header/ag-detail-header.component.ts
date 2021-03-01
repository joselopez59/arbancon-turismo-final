import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AnimationController  } from '@ionic/angular';
import { ModalPage } from 'src/app/shared-components/ag-detail/modal/modal.page';

@Component({
  selector: 'app-ag-detail-header',
  templateUrl: './ag-detail-header.component.html',
  styleUrls: ['./ag-detail-header.component.scss'],
})
export class AgDetailHeaderComponent implements OnInit {

  @Input() name: string;
  @Input() componentProps: object;

  constructor(
    public modalController: ModalController,
    public animationCtrl: AnimationController
  ) { }

  ngOnInit() {}

  async openModal() {

    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(300)
      .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    const modal = await this.modalController.create({
      component: ModalPage,
      enterAnimation,
      leaveAnimation,
      componentProps: this.componentProps
    });

    return await modal.present();
  }
}
