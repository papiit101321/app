import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Campaign } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-campaign-add',
  templateUrl: './campaign-add.page.html',
  styleUrls: ['./campaign-add.page.scss'],
})
export class CampaignAddPage implements OnInit {

  constructor( private campaignService: CampaignsService,
    private router:Router,
    private firebaseService:FirebaseService ) { }

  ngOnInit() {
  }

  saveNewCampaign(title:HTMLInputElement, 
    code:HTMLInputElement,
    resume:HTMLInputElement,
    imgURL:HTMLInputElement,
    date_start:HTMLInputElement,
    date_end:HTMLInputElement,
    people_on_charge:HTMLInputElement){

      const campaign: Campaign = {
        id: this.firebaseService.createID(),
        title :title.value,
        code : code.value,
        imageURL:imgURL.value,
        resume:resume.value,
        date_start:date_start.value,
        date_end:date_end.value,
        people_on_charge:people_on_charge.value,
        visits : [],
      }

    const link = 'campaigns/'
    this.firebaseService.createDocument(campaign, link, campaign.id).then(res =>  {
      this.router.navigate(['/campaigns'])
    }).catch( err => {
      console.log('Error de firebase -> ',err)
      this.router.navigate(['/error-firebase'])

    });

  }
}
