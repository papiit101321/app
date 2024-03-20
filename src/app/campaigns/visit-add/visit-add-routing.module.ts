import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitAddPage } from './visit-add.page';

const routes: Routes = [
  {
    path: '',
    component: VisitAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitAddPageRoutingModule {}
