import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/core/services/report-service/report.service';
import {causes} from '../../../core/services/check/check.constant';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent {
  @Output() eventEmit = new EventEmitter<void>();

  report: FormGroup;

  user = localStorage.getItem('user');

  CAUSES = causes;

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
      causas: this.fb.array([]),
      acuerdo: ['', Validators.required ],
      evidencia: [ '', Validators.required ],
      probatorios: [ '', Validators.required ],
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  generatePdf() {
    this.reportService.generatePdf('open', this.report.value );
  }

  addCause(value: string, checked: boolean) {
    const array = this.report.get('causas') as FormArray;
    if(checked) {
      array.push(new FormControl(value));
    } else {
      array.removeAt((array.value as string[]).findIndex((element: string) => element === value));
    }
  }

  save() {
    this.reportService.save(this.report.value);
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
