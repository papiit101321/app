import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign, Visit } from 'src/app/campaigns/campaign.model';
import { FirebaseService } from 'src/app/services/firebase.service';

import { Observable } from 'rxjs';
import { FormField } from '../apply-questionary.model';
import { FormfieldControlService } from '../formfield-control.service';
import { JsonFormData } from 'src/app/components/json-form/json-form.component';
import { HttpClient } from '@angular/common/http';

//https://danielk.tech/home/how-to-build-a-dynamic-angular-form

@Component({
  selector: 'app-apply-questionary',
  templateUrl: './apply-questionary.page.html',
  styleUrls: ['./apply-questionary.page.scss'],
})

export class ApplyQuestionaryPage implements OnInit{

public formData: JsonFormData;



public  formFields: Observable<FormField<any>[]>;
public  formFieldsTrue: FormField<any>[];
//public  formFields: FormField<any>[];

campaignId: string
visitId:string


campaign: Campaign = {    
  id: '',
  title: '',
  code: '',
  resume: '',
  imageURL: '',
  date_start: '',
  date_end: '',
  people_on_charge: '',
  visits: null
}

visit: Visit = {
  id: '',
  title: '',
  code: '',
  date: '',
  people_on_charge: '',
  geoposition: '',
  questionary: null,
  photos: null
}

  constructor( private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
    private service: FormfieldControlService,
    private http: HttpClient) {


    }
     

  ngOnInit() {
/*
    this.formFields = this.service.getFormFields();
    this.formFields.subscribe( res =>{
      this.formFieldsTrue = res
    });

*/
/*
this.http
.get('/assets/my-form.json')
.subscribe((formData: JsonFormData) => {
  this.formData = formData;
});
*/
    this.activatedRoute.paramMap.subscribe( paramMap => {
      //redirect
      this.campaignId = paramMap.get('campaignId')
      this.visitId = paramMap.get('visitId')
      //this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
       
  

    });

     const pathC = '/campaigns/'+this.campaignId
      this.firebaseService.getDocument<Campaign>(pathC).subscribe( value => {
      this.campaign = value
    
    });

    const path2 = '/campaigns/'+this.campaignId+'/visits/'+this.visitId
    this.firebaseService.getDocument<Visit>(path2).subscribe(value => {
      this.visit = value;

      //console.log('read photos', this.campaign.code, this.visit.code);

      //this.photoService.loadSaved(this.campaign.key,this.visit.code);
    });

    //const path3 = '/campaigns/'+this.campaignId+'/visits/'+this.visitId+'/photos/'+this.photoId
    //this.firebaseService.getDocument<UserPhoto>(pathC).subscribe( value => {
    //this.photo = value
    //});


  }

}
