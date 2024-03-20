import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign, Visit } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.page.html',
  styleUrls: ['./campaign-detail.page.scss'],
})
export class CampaignDetailPage implements OnInit {

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

    visits =
      [{
        id: '',
        title: '',
        code: '',
        date: '',
        people_on_charge: '',
        geoposition: '',
        questionary: null,
        photos: null
      }]
        
  constructor( private activatedRoute: ActivatedRoute, 
    private campaignsService: CampaignsService,
    private router:Router,
    private alertCtrl:AlertController,
    private firebaseService:FirebaseService ) { }


  ngOnInit() {
    
    let recipeId = ""

    this.activatedRoute.paramMap.subscribe( paramMap => {
      //redirect
      recipeId = paramMap.get('campaignId')

      
      //this.campaignsService.getCampaign(recipeId)
    });

    const path = '/campaigns/'+recipeId
    this.firebaseService.getDocument<Campaign>(path).subscribe( value => {
      this.campaign = value

    });

    const pathVisits = '/campaigns/'+recipeId+'/visits'
    
    this.firebaseService.getDocuments<Visit>(pathVisits).subscribe( res=> {
      this.visits = res
      console.log(res)
    });



  }


  async deleteCampaign(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Eliminar la campaña?',
      message: 'La información no podrá ser recuperada.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            //this.campaignsService.deleteCampaign(this.campaign.id)
            const path = '/campaigns/'+this.campaign.id
            this.firebaseService.deleteDocument(path).then( res => {
              this.router.navigate(['/campaigns'])
            });
          }
        }
      ]
    });

    await alertElement.present();

  }

  addNewVisit(){
    this.router.navigate(['/new-visit',this.campaign.id]) 
  }

}
