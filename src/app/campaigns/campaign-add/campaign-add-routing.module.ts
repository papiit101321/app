import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignAddPage } from './campaign-add.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignAddPageRoutingModule {}
