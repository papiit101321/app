import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitAddPageRoutingModule } from './visit-add-routing.module';

import { VisitAddPage } from './visit-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitAddPageRoutingModule
  ],
  declarations: [VisitAddPage]
})
export class VisitAddPageModule {}
