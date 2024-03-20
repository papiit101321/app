import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsPage } from './campaigns.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignsPage
  },
  {
    path: 'campaign-detail',
    loadChildren: () => import('./campaign-detail/campaign-detail.module').then( m => m.CampaignDetailPageModule)
  },
  {
    path: 'visit-detail',
    loadChildren: () => import('./visit-detail/visit-detail.module').then( m => m.VisitDetailPageModule)
  },
  {
    path: 'label-photos',
    loadChildren: () => import('./label-photos/label-photos.module').then( m => m.LabelPhotosPageModule)
  },
  {
    path: 'campaign-add',
    loadChildren: () => import('./campaign-add/campaign-add.module').then( m => m.CampaignAddPageModule)
  },
  {
    path: 'visit-add',
    loadChildren: () => import('./visit-add/visit-add.module').then( m => m.VisitAddPageModule)
  },
  {
    path: 'show-photo',
    loadChildren: () => import('./show-photo/show-photo.module').then( m => m.ShowPhotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsPageRoutingModule {}
