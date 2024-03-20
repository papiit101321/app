import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { CampaignsService } from './campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  campaigns = []

  constructor( private campaignService: CampaignsService,
    private router: Router,
    private firebaseService:FirebaseService ) { }

  ngOnInit() {
    //this.campaigns = this.campaignService.getCampaigns()
    const path = 'campaigns/'
    this.firebaseService.getDocuments(path).subscribe( res=> {
      this.campaigns = res
    })
  }

  ionViewWillEnter(){
    //this.campaigns = this.campaignService.getCampaigns()
  }

  addNewCampaign() {
    this.router.navigate(['/new-campaign'])
  }
}
