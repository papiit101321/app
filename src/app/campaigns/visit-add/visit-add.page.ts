import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Campaign, Visit } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.page.html',
  styleUrls: ['./visit-add.page.scss'],
})
export class VisitAddPage implements OnInit {

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

  recipeId:string

  constructor( private campaignsService:CampaignsService, 
    public activatedRoute:ActivatedRoute,
    public router:Router,
    private firebaseService: FirebaseService   ) {  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      //redirect
      this.recipeId = paramMap.get('campaignId')
      this.campaign = this.campaignsService.getCampaign(this.recipeId)
    });

    //get the information of the campaign
    const path = '/campaigns/'+this.recipeId
    console.log(path)
    this.firebaseService.getDocument<Campaign>(path).subscribe( value => {
      this.campaign = value
    });
  }

  saveNewVisit(title:HTMLInputElement,
    code:HTMLInputElement,
    date:HTMLInputElement,
    people_on_charge:HTMLInputElement){

      const visit: Visit = {
        id: this.firebaseService.createID(),
        title :title.value,
        code : code.value,
        date : date.value,
        people_on_charge:people_on_charge.value,
        geoposition: "",
        questionary: null,
        photos: null
      }

    const link = 'campaigns/'+this.recipeId+'/visits'
    this.firebaseService.createDocument(visit, link, visit.id).then(res =>  {
      this.router.navigate(['/campaigns',this.campaign.id])
    }).catch( err => {
      console.log('Error de firebase -> ',err)
      this.router.navigate(['/error-firebase'])

    });


      //this.campaignsService.addVisit(this.campaign.id)




  }

}
