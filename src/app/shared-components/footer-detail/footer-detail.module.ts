import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterDetailComponent } from './footer-detail.component';

@NgModule({
  declarations: [ FooterDetailComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ FooterDetailComponent ]
})

export class FooterDetailModule { }
