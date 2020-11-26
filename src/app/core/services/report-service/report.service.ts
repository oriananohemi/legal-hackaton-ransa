import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {info} from './report.constant'
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  generatePdf(action) {
    const documentDefinition = info;

    switch (action) {
      case 'open': return pdfMake.createPdf(documentDefinition).open();
      case 'print': return pdfMake.createPdf(documentDefinition).print();
      case 'download': return pdfMake.createPdf(documentDefinition).download();
      default: return pdfMake.createPdf(documentDefinition).open();
    }
  }
}
