import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/core/services/report-service/report.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent {
  @Output() eventEmit = new EventEmitter<void>();

  report: FormGroup;

  user = localStorage.getItem('user');

  minDate: Date;
  maxDate: Date;

  constructor(private reportService: ReportService, private fb: FormBuilder) {
    this.report = this.fb.group({
      reportante: [ this.user, Validators.required ],
      trabajador: [ '', Validators.required ],
      lugar: [ '', Validators.required ],
      fecha: [ '', Validators.required ],
      hora: [ '', Validators.required ],
      testigos: [ '', Validators.required ],
      estado: [ '', Validators.required ],
      relato: [ '', Validators.required ],
      evidencia: [ '', Validators.required ],
      probatorios: [ '', Validators.required ],
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  generatePdf() {
    this.reportService.generatePdf('open');
  }

  save() {
    
  }
  onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');
  
  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       this.srcResult = e.target.result;
  //     };
  
  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  }
}
