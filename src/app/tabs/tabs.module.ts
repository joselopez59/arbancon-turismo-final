import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [TabsPage]
})

export class TabsPageModule {}
