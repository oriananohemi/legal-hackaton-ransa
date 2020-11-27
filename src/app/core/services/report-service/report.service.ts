import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { info } from './report.constant'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private incidence: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
    this.incidence = this.afs.collection('sanciones');
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
  onFileSelected() {
      const inputNode: any = document.querySelector('#file');
    
      if (typeof (FileReader) !== 'undefined') {
        // const reader = new FileReader();
    
        // reader.onload = (e: any) => {
        //   this.srcResult = e.target.result;
        // };
    
        // reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }

  save(sancion) {
    console.log(sancion)
    const id = this.afs.createId();
    
    // return this.incidence.doc(id).set()
  }
}
