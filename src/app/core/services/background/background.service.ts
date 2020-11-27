import { Injectable } from '@angular/core';
import { Packer } from "docx";
import { saveAs } from "file-saver";
// import {FirestoreService} from '../firestore/firestore.service';
import {Background} from './background';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(

  ) { }

  public download(): void {
    const documentCreator = new Background();
    const doc = documentCreator.create([]);

    Packer.toBlob(doc)
    .then(blob => {
      saveAs(blob, "example.docx");
    });
  }
}
