import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visit } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-label-photos',
  templateUrl: './label-photos.page.html',
  styleUrls: ['./label-photos.page.scss'],
})
export class LabelPhotosPage implements OnInit {

  //visit: Visit
  //campaignId: string
  //visitId: string

  //constructor( private campaignsService: CampaignsService, private activatedRoute: ActivatedRoute ) { }

  constructor( ) { }


  ngOnInit() {
    //this.activatedRoute.paramMap.subscribe( paramMap => {
    //  //redirect
    //  this.campaignId = paramMap.get('campaignId')
    //  this.visitId = paramMap.get('visitId')
    //  this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
    //})
  }

}
