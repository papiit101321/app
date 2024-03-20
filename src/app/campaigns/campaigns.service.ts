import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Campaign, Questionary, Visit } from './campaign.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

/*  private questionary: Questionary[] = [
    {
      id:'1',
      question:'Nombre:',
      answer:'Victor',
    },
    {
      id:'2',
      question:'Nacionalidad:',
      answer:'Mexicano',
    },
  ]
*/
  private visits: Visit[] = [
    {
      id: '1',
      title: 'Dzibichaltun',
      code: "DZ",
      date: '01-01-2021',
      people_on_charge: 'Ilse',
      geoposition: '38° 53′ 35″ N, 77° 00′ 32″ W',
      questionary: null,
      photos: ['https://confinesturismo.com.mx/image/img-leis-dest/Turismo-Comunitario-Yucatan-4.jpg','photo2.jpg'],
    },
    {
      id: '2',
      title: 'Mayapan',
      code: "MY",
      date: '02-01-2021',
      people_on_charge: 'Ilse',
      geoposition: '38° 53′ 35″ N, 77° 00′ 32″ W',
      questionary: null,
      photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRDL8wb6OlD06D52f-9H_QvVDhDMv5dg_cg&usqp=CAU','photo2.jpg'],
    },
  ]

  private campaigns: Campaign[] = [
    {
      id:'1',
      title:'Primera Campaña',
      code:'2021A',
      resume:'Campaña piloto para realizar pruebas con la app',
      imageURL:'https://visaalmundo.com/blog/wp-content/uploads/2020/07/que-hacer-en-merida-portada.png',
      date_start:'1-11-2021',
      date_end:'31-12-2021',
      people_on_charge:'Ilse Ruiz',
      visits: this.visits,
    },
    {
      id:'2',
      title:'Segunda Campaña',
      code:'2021B',
      resume:'Campaña piloto para realizar pruebas con la app',
      imageURL:'https://www.viajefest.com/wp-content/uploads/2020/05/letrero-Me%CC%81rida.jpg',
      date_start:'1-11-2021',
      date_end:'31-12-2021',
      people_on_charge:'Ilse Ruiz',
      visits: this.visits,
    },
  ]

  constructor( private geolocation: Geolocation, private firebaseService:FirebaseService ) { 
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  //constructor() { }

  lat: string
  lon: string

  getCampaigns(){
    return [...this.campaigns]
  }

  getCampaign(campaignId: string) {
    return {
      ...this.campaigns.find(campaign => {
      return campaign.id === campaignId
      })
    }
  }

  addCampaign(campaign:Campaign, link:string, id: string) {    
    this.firebaseService.createDocument(campaign, link, id )

  }

  deleteCampaign(campaignId: string) {

    
//    this.campaigns = this.campaigns.filter(campaign => {
//      return campaign.id !== campaignId
//    }) 
  }

  getVisit(campaignId: string, visitId: string) {
    const campaing = this.campaigns.find(campaign => {
      return campaign.id === campaignId
      })    
      return {
        ...campaing.visits.find(visit => {
        return visit.id === visitId
      })
    }
  }

  updateGPS(): void{
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude + ""
      this.lon = resp.coords.longitude + ""
     }).catch((error) => {
       console.log('Error getting location', error);
     });     
  }

  addVisit(campaignId:string){
    
  }

  deleteVisit(campaignId:string, visitId:string){

  }

 
}
