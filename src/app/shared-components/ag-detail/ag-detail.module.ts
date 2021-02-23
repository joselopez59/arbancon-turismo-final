import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AgDetailHeaderComponent } from './ag-detail-header/ag-detail-header.component';
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AgDetailHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModalPageModule
  ],
  exports: [
    AgDetailHeaderComponent
  ]
})

export class AgDetailModule { }
