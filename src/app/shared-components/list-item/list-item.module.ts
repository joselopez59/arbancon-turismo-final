import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListItemComponent } from './list-item.component';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [
    ListItemComponent
  ]
})

export class ListItemModule { }
