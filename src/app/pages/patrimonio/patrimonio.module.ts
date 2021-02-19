import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { PatrimonioPage } from './patrimonio.page';
import { PatrimonioDetailComponent } from './patrimonio-detail/patrimonio-detail.component';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatrimonioPageRoutingModule,
    ExpandableModule,
    MarkdownModule.forChild(),
    SharedDirectivesModule
  ],
  declarations: [
    PatrimonioPage,
    PatrimonioDetailComponent
   ]
})

export class PatrimonioPageModule {}
