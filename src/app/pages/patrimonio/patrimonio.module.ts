import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';
import { PatrimonioPage } from './patrimonio.page';
import { HeaderExpandableModule } from 'src/app/shared-components/header-expandable/header-expandable.module';
import { PatrimonioDetailComponent } from './patrimonio-detail/patrimonio-detail.component';
import { FooterDetailModule } from 'src/app/shared-components/footer-detail/footer-detail.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatrimonioPageRoutingModule,
    HeaderExpandableModule,
    MarkdownModule.forChild(),
    FooterDetailModule,
    SharedDirectivesModule
  ],
  declarations: [
    PatrimonioPage,
    PatrimonioDetailComponent
   ]
})

export class PatrimonioPageModule {}
