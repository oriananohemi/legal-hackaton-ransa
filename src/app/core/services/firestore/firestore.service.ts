import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs'
import {Data} from '../../definitions/data.model'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  data$: Observable<Data[]>;

  constructor(
    private fs: AngularFirestore,
  ) { 
    this.data$ = this.fs.collection('sanciones').valueChanges() as Observable<Data[]>;
  }

  getData(): Observable<Data[]>{
    return this.data$;
  }

}


