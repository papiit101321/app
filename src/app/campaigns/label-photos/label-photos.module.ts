import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelPhotosPageRoutingModule } from './label-photos-routing.module';

import { LabelPhotosPage } from './label-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelPhotosPageRoutingModule
  ],
  declarations: [LabelPhotosPage]
})
export class LabelPhotosPageModule {}
