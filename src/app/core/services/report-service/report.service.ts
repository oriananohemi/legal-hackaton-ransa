import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { info } from './report.constant'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { finalize } from 'rxjs/operators';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private incidenceCollection: AngularFirestoreCollection;
  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) {
    this.incidenceCollection = this.afs.collection('sanciones');
  }

  generatePdf(action, sancion) {
    const documentDefinition = info(sancion);
    const pdf = pdfMake.createPdf(documentDefinition);

    switch (action) {
      case 'open':
          return pdf.open();
      case 'print':
          return pdf.print();
      case 'download':
          return pdf.download();
      default:
          return pdf.open();
    }
  }

  onFileSelected(fileURL): Promise<any> {
    return new Promise(resolve => {
      const day = Date.now();
      const file = fileURL;
      const filePath = `mediosprobatorios/${day}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => fileRef.getDownloadURL().subscribe(url => resolve(url)))
        )
        .subscribe();
    });
  }

  updloadBlob(sancion): Promise<string> {
    return new Promise(resolve => {
      const filePath = `reportes/${Date.now()}`;
      const ref = this.storage.ref(filePath);
      pdfMake.createPdf(info(sancion)).getBlob((blob) => {
        ref.put(blob)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe(url => resolve(url));
          })
        )
        .subscribe();
      });
    });
  }

  async save(incidence, file) {
    const fileURL = await this.onFileSelected(file);
    const reportURL = await this.updloadBlob(incidence);
    const option = localStorage.getItem('option')
    const id = this.afs.createId();
    const newIncidence = { ...incidence, id, fileURL, reportURL, estado: 'en revision', motivo: option, codigo: (Math.random() * (9 - 1) + 1).toFixed(3)};
    return this.incidenceCollection.doc(id).set(newIncidence);
  }
}
