import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { info } from './report.constant'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { firm } from '../../definitions/report.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  firma$: Observable<firm>;
  private incidenceCollection: AngularFirestoreCollection;
  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) {
    // this.incidenceCollection = this.afs.collection('sanciones');
  }

  generatePdf(action, sancion) {
    const documentDefinition = info(sancion);

    switch (action) {
      case 'open': return pdfMake.createPdf(documentDefinition).open();
      case 'print': return pdfMake.createPdf(documentDefinition).print();
      case 'download': return pdfMake.createPdf(documentDefinition).download();
      default: return pdfMake.createPdf(documentDefinition).open();
    }
  }
  onFileSelected(fileURL) {
    const day = Date.now();
    const file = fileURL;
    const filePath = `mediosprobatorios/${day}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            return url;
          });
        })
      )
      .subscribe();
  }

  save(sancion) {
    const id = this.afs.createId();
    return this.incidenceCollection.doc(id).set(sancion);
  }
}
