import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderExpandableComponent } from './header-expandable.component';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';

@NgModule({
  declarations: [ HeaderExpandableComponent ],
  imports: [
    CommonModule,
    IonicModule,
    ExpandableModule
  ],
  exports: [
    HeaderExpandableComponent
  ]
})

export class HeaderExpandableModule { }
