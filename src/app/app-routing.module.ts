import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'campaigns',
    pathMatch: 'full'
  },
  {
    path: 'home',
  children: [
    {
      path: ":campaignId",
      children: [
        {
          path: ":visitId",
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
        }],
      }],
  },
  {
    path: 'campaigns',
    children: [
      {
        path: "",
        loadChildren: () => import('./campaigns/campaigns.module').then( m => m.CampaignsPageModule)
      },
      {
        path: ":campaignId",
        children: [
          {
            path: "",
            loadChildren: () => import('./campaigns/campaign-detail/campaign-detail.module').then( m => m.CampaignDetailPageModule)
          },
          {
            path: ":visitId",
            loadChildren: () => import('./campaigns/visit-detail/visit-detail.module').then( m => m.VisitDetailPageModule)
          },
        ]
      }
    ]
  },
  {
    path: 'new-campaign',
    loadChildren: () => import('./campaigns/campaign-add/campaign-add.module').then(m => m.CampaignAddPageModule)
  },

  {
    path: 'new-visit',
    children: [
      {
        path: ":campaignId",
        children: [
          {
            path: "",
            loadChildren: () => import('./campaigns/visit-add/visit-add.module').then( m => m.VisitAddPageModule)
          },
        ]
      }
    ]
  },


  {
    path: 'show-photo',
    children: [
      {
        path: ":campaignId",
        children: [
          {
            path: ":visitId",
            children: [
              {
                path: ":photoId",
                children: [
                  {
                    path: ":position",
                    children: [                  
                    {
                      path: "",
                      loadChildren: () => import('./campaigns/show-photo/show-photo.module').then( m => m.ShowPhotoPageModule)
                    },]
                  },]
              },]
          },]
      },]
  },

  {
    path: 'error-firebase',
    loadChildren: () => import('./error/firebase/firebase.module').then( m => m.FirebasePageModule)
  },

  {
    path: 'apply-questionary',
    children: [
      {
        path: ":campaignId",
        children: [
          {
            path: ":visitId",
            loadChildren: () => import('./questionary/apply-questionary/apply-questionary.module').then( m => m.ApplyQuestionaryPageModule)
          },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
