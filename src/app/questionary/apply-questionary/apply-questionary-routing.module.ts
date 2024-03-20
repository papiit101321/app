import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyQuestionaryPage } from './apply-questionary.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyQuestionaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyQuestionaryPageRoutingModule {}
