import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { Firebase } from '@ionic-native/firebase';
//import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { FormfieldControlService } from './questionary/formfield-control.service';
import { DynamicFormComponent } from './questionary/dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './questionary/dynamic-form-input/dynamic-form-input.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [AppComponent, DynamicFormComponent, DynamicFormInputComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule,
  ReactiveFormsModule,
  AngularFireStorageModule],   
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
    Geolocation,FormfieldControlService,],
  bootstrap: [AppComponent],
})
export class AppModule {

}
