import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign, Visit } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../photo.service';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.page.html',
  styleUrls: ['./visit-detail.page.scss'],
})
export class VisitDetailPage implements OnInit {

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


  campaignId: string
  visitId: string

  constructor( private activatedRoute: ActivatedRoute, 
    private campaignsService: CampaignsService,
    public photoService: PhotoService, 
    public actionSheetController: ActionSheetController, 
    public router: Router,
    private alertCtrl:AlertController, 
    private firebaseService: FirebaseService,
    private angularFirestore: AngularFirestore) { }

  public goToPage( page:string, photo: UserPhoto, position: number ){
    this.router.navigate( [page] )
  }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      //redirect
      this.campaignId = paramMap.get('campaignId')
      this.visitId = paramMap.get('visitId')
      //this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
    })

    const pathC = '/campaigns/'+this.campaignId
    this.firebaseService.getDocument<Campaign>(pathC).subscribe( value => {
      this.campaign = value
    });

    const path = '/campaigns/'+this.campaignId+'/visits/'+this.visitId
    this.firebaseService.getDocument<Visit>(path).subscribe( value => {
      this.visit = value
      console.log('read photos',this.campaign.code,this.visit.code)

      this.photoService.loadSaved(this.campaign.code,this.visit.code);

    });

  }

  ionViewWillEnter(){
    this.photoService.loadSaved(this.campaign.code,this.visit.code);
    //this.campaigns = this.campaignService.getCampaigns()
  }


  public applyQuestionary(){
    this.router.navigate(['/home/',this.campaignId, this.visitId])
  }

  public async updateGPS(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Actualizar GPS?',
      message: 'Se intentará encontrar la posición del lugar.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Actualizar',
          handler: () => {
            this.campaignsService.updateGPS()
            this.visit.geoposition = this.campaignsService.lat + " "+ this.campaignsService.lon
            
            //this.campaignsService.saveLabels()
            const link = '/campaigns/'+this.campaignId+'/visits/'+this.visitId

            const doc: AngularFirestoreDocument<Visit> = this.angularFirestore.doc(link);
            doc.update(this.visit).then(res =>  {
              this.router.navigate(['/campaigns',this.campaignId, this.visitId])
            }).catch( err => {
              console.log('Error de firebase -> ',err)
              this.router.navigate(['/error-firebase'])
            });


          }
        }
      ]
    });

    await alertElement.present();

  }

  public showPhoto(photo: UserPhoto, position: number) {
    this.router.navigate(['/show-photo', this.campaignId, this.visitId, photo.filepath, position ])
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position,this.campaignId,this.visitId);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

  public async takePhoto(){
    this.photoService.addNewToGallery(this.campaign.code,this.visit.code, this.campaignId,this.visitId)
  }
    
  public async deleteVisit(){
    const alertElement = await this.alertCtrl.create({
      header: '¿Eliminar la visita?',
      message: 'La información no podrá ser recuperada.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            //this.campaignsService.deleteVisit(this.campaignId, this.visitId)
            const path = '/campaigns/'+this.campaignId+'/visits/'+this.visitId            
            this.firebaseService.deleteDocument(path).then( res=>{
              this.router.navigate(['/campaigns',this.campaignId])
            });
            
          }
        }
      ]
    });

    await alertElement.present();
  }


  
}
