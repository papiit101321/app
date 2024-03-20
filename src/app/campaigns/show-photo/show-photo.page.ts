import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
//import { Firebase } from '@ionic-native/firebase/ngx';
//import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Campaign, Visit } from '../campaign.model';
import { PhotoService, UserPhoto } from '../photo.service';

@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.page.html',
  styleUrls: ['./show-photo.page.scss'],
})
export class ShowPhotoPage implements OnInit {

  campaignId: string
  visitId: string
  position: string
  photoId: string

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

photo : UserPhoto ={
 // id: '',
  filepath: '',
  webviewPath: '',
  labels: []
}

  public form = [
    { val: 'ETIQUETA1', isChecked: true },
    { val: 'ETIQUETA2', isChecked: false },
    { val: 'ETIQUETA3', isChecked: false }
  ];

  constructor( private activatedRoute:ActivatedRoute,
    private firebaseService: FirebaseService, 
    private photoService:PhotoService,
    private alertCtrl:AlertController, 
    private router:Router,
    private angularFirestore: AngularFirestore,
    ) {} //private firebase: Firebase ) { }


  async ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paramMap => {
      //redirect
      this.campaignId = paramMap.get('campaignId')
      this.visitId = paramMap.get('visitId')
      this.position = paramMap.get('position')
      this.photoId = paramMap.get('photoId')
      //this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
       
  

    })

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

    const path3 = '/campaigns/'+this.campaignId+'/visits/'+this.visitId+'/photos/'+this.photoId
    this.firebaseService.getDocument<UserPhoto>(pathC).subscribe( value => {
    this.photo = value
  
  });

  }

  public async saveLabels(){


    const alertElement = await this.alertCtrl.create({
      header: '¿Guardar Etiquetas?',
      message: 'Las etiquetas quedaran referenciadas a la foto',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: () => {
            var labels = []
            for (var check in this.form) {
                if(this.form[check].isChecked){
                  labels.push(this.form[check])
                }
            }
            this.photo.labels = labels
            //this.campaignsService.saveLabels()
            const link = '/campaigns/'+this.campaignId+'/visits/'+this.visitId+'/photos/'+this.photoId

            const doc: AngularFirestoreDocument<UserPhoto> = this.angularFirestore.doc(link);
            doc.update(this.photo).then(res =>  {
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

}
