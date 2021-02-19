import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatrimonioDetailComponent } from './patrimonio-detail/patrimonio-detail.component';

import { PatrimonioPage } from './patrimonio.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonioPage
  },
  {
    path: ':id',
    component: PatrimonioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrimonioPageRoutingModule {}
