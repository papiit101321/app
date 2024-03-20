import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelPhotosPage } from './label-photos.page';

const routes: Routes = [
  {
    path: '',
    component: LabelPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelPhotosPageRoutingModule {}
