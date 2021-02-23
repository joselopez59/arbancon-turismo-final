import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderExpandableComponent } from './header-expandable.component';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
  declarations: [
    HeaderExpandableComponent,
    ExpandableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderExpandableComponent
  ]
})

export class HeaderExpandableModule { }
