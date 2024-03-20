import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    IonicModule,
    //ApplyQuestionaryPageRoutingModule
    //ReactiveFormsModule,
    //HomePageRoutingModule,
    //HttpClientModule,
  ],
  //declarations: [JsonFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApplyQuestionaryPageModule {}
