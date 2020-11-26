import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sanction } from '../../definitions/model/employed';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SanctionsService {

  collection: AngularFirestoreCollection<Sanction>;
  allSanctions: Observable<Sanction[]>;
  sanctionDoc: AngularFirestoreDocument<Sanction>;
 // private productosAdd$ = new BehaviorSubject([]);
 // productObs=this.productosAdd$.asObservable();
  //productos = [];

  constructor(private firestore: AngularFirestore) { 
   
   // this.allSanctions= firestore.collection('sanciones').valueChanges()
  }

  getAllSanctions() {
    this.collection = this.firestore.collection<Sanction>("sanciones")
    this.allSanctions = this.collection.valueChanges()
    return this.allSanctions;
  }
  
  

}
