import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { finalize, tap } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { imgFile } from './campaign.model';

@Injectable({
  providedIn: 'root',
})


export class PhotoService {

   public photos: UserPhoto[] = [];
  public photosTemp: UserPhoto[] = [];
  //private PHOTO_STORAGE: string = 'photos';

  constructor(private platform: Platform,
    private angularFirestore: AngularFirestore,
    private storage: AngularFireStorage) {


    }

  public async loadSaved(keyc:string, code: string) {
    // Retrieve cached photo array 
    //const photoList = await Storage.get({ key: this.PHOTO_STORAGE+'-'+keyc+'-'+code });
    //this.photosTemp = JSON.parse(photoList.value) || [];
    this.photos = []

    const fileName = '/'
    var storageRef = this.storage.ref(fileName);

    storageRef.listAll().subscribe(res => {
      for (let photo of res.items.values()) {
        if (photo.name.startsWith(keyc+'-'+code)) {
          photo.getDownloadURL().then(res2 => {
    
            this.photos.push({
              filepath : photo.name,
              webviewPath : res2,
              labels : []
            })

          });
        }
          }        
      });
    

    /*
    storageRef.put( blob ).then( res => {
        storageRef.updateMetadata(newMetadata);
        console.log(res)
      })




    // If running on the web...
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photosTemp) {
        if (photo.filepath.startsWith(keyc+'-'+code)) {
        this.photos.push(photo)
        }
      }

      // Display the photo by reading into base64 format
      for (let photo of this.photos) {
        // Read each saved photo's data from the Filesystem

        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
      
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
    */
  }

  /* Use the device camera to take a photo:
  // https://capacitor.ionicframework.com/docs/apis/camera

  // Store the photo data into permanent file storage:
  // https://capacitor.ionicframework.com/docs/apis/filesystem

  // Store a reference to all photo filepaths using Storage API:
  // https://capacitor.ionicframework.com/docs/apis/storage
  */
  public async addNewToGallery(keyc:string,code:string,campaignId:string, visitId:string) {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100, // highest quality (0 to 100)
    });

    const savedImageFile = await this.savePicture(capturedPhoto,keyc,code,campaignId, visitId);

    // Add new photo to Photos array
    //this.photos.unshift(savedImageFile);

    // Cache all photo data for future retrieval
    //Storage.set({
    //  key: this.PHOTO_STORAGE+'-'+keyc+'-'+code,
    //  value: JSON.stringify(this.photos),
    //});
  }

  // Save picture to file on device
  private async savePicture(cameraPhoto: Photo,keyc:string,code:string, campaignId:string, visitId:string) {
    // Convert photo to base64 format, required by Filesystem API to save

    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = keyc+'-'+code+'-'+ (new Date().getTime()) + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    //save reference in firebase
 
  
    const userPhoto: UserPhoto = {
      //id: this.angularFirestore.createId(),
      filepath: "",
      webviewPath: "",
      labels: [],
    } 


    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      userPhoto.filepath = savedFile.uri
      userPhoto.webviewPath = Capacitor.convertFileSrc(savedFile.uri)
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      userPhoto.filepath= fileName
      userPhoto.webviewPath= cameraPhoto.webPath
    }

    const linkPhoto= '/campaigns/'+campaignId+'/visits/'+visitId+'/photos/'
    const itemsCollection: AngularFirestoreCollection<UserPhoto> =
    this.angularFirestore.collection<UserPhoto>(linkPhoto);
    itemsCollection.doc(fileName).set(userPhoto).then(res =>  {
      console.log('Photo reference uploaded!')    
    }).catch( err => {
      console.log('Error de firebase -> ',err)
  
    });


    /*

    fileToUpload: File

    const fileId = this.angularFirestore.createId();
    const theFile={
    name: '',
    filepath: '',
    size: 0
    }


    Filesystem.stat({path:fileName,directory: Directory.Data}).then( result => {
      console.log(result)
      theFile.name = fileName,
      theFile.filepath = result.uri,
      theFile.size = result.size
    this.filesCollection.doc(fileId).set(theFile).then( res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
     
    });
*/

var storageRef = this.storage.ref(fileName);
const newMetadata = {
  contentType: 'image/jpeg'
}
const response = await fetch(cameraPhoto.webPath!);
const blob = await response.blob();

storageRef.put( blob ).then( res => {

    res.ref.getDownloadURL().then( weburl => {
      this.photos.push({
        filepath : fileName,
        webviewPath : weburl,
        labels : []
        });    
    })

    storageRef.updateMetadata(newMetadata).subscribe(res => {
      console.log(res)
  
  
     
    });
    });


    return userPhoto
  }


  
  // Read camera photo into base64 format based on the platform the app is running on
  private async readAsBase64(cameraPhoto: Photo) {
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: cameraPhoto.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(cameraPhoto.webPath!);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }





  }

  // Delete picture by removing it from reference data and the filesystem
  public async deletePicture(photo: UserPhoto, position: number, keyc:string,code:string) {
    // Remove this photo from the Photos reference data array
    this.photos.splice(position, 1);

    // Update photos array cache by overwriting the existing photo array
    //Storage.set({
    //  key: this.PHOTO_STORAGE+'-'+keyc+'-'+code,
    //  value: JSON.stringify(this.photos),
    //});

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}

export interface UserPhoto {
  //id: string;
  filepath: string;
  webviewPath: string;
  labels:string[];
}
