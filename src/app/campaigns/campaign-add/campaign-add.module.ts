import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignAddPageRoutingModule } from './campaign-add-routing.module';

import { CampaignAddPage } from './campaign-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignAddPageRoutingModule
  ],
  declarations: [CampaignAddPage]
})
export class CampaignAddPageModule {}
