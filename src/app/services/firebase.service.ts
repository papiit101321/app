import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private angularFirestore: AngularFirestore) { }

  getDocuments<type>(path: string){
    const itemsCollection: AngularFirestoreCollection<type> =
    this.angularFirestore.collection<type>(path);
    return itemsCollection.valueChanges();    
  }
  
  getDocument<type>(path:string){
    const doc: AngularFirestoreDocument<type> = this.angularFirestore.doc(path);
    return doc.valueChanges();
  }
  
  updateDocument(){

  }

  deleteDocument<type>(path:string){
    const doc: AngularFirestoreDocument<type> = this.angularFirestore.doc(path);
    return doc.delete();
  }



  createDocument<type>(data: type, link:string, id: string){
    

    const itemsCollection: AngularFirestoreCollection<type> =
                      this.angularFirestore.collection<type>(link);

  return itemsCollection.doc(id).set(data)
  //itemsCollection.add(data)
  }

  createID(): string{
    return this.angularFirestore.createId();
  }

}
