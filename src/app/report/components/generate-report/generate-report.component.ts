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

  file: string;

  minDate: Date;
  maxDate: Date;

  constructor(private reportService: ReportService, private fb: FormBuilder) {
    this.report = this.fb.group({
      reportante: [ this.user, Validators.required ],
      trabajador: [ '', Validators.required ],
      lugar: [ '', Validators.required ],
      fecha: [ '', Validators.required ],
      hora: [ '' ],
      testigos: [ '' ],
      estado: [ '' ],
      relato: [ '' ],
      causas: this.fb.array([]),
      acuerdo: ['' ],
      evidencia: [ '' ],
      probatorios: [ '' ],
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  generatePdf() {
    this.reportService.generatePdf('open', this.report.value );
    if (this.file) {
      this.reportService.onFileSelected(this.file);
    }
  }

  addCause(value: string, checked: boolean) {
    const array = this.report.get('causas') as FormArray;
    if (checked) {
      array.push(new FormControl(value));
    } else {
      array.removeAt((array.value as string[]).findIndex((element: string) => element === value));
    }
  }

  save() {
    this.reportService.save(this.report.value);
  }
  onFileSelected($event) {
    this.file = $event.target.files[0];
    console.log(this.file)
  }
}
