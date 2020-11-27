import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/core/services/report-service/report.service';
import Swal from 'sweetalert2';
import {causes} from '../../../core/services/check/check.constant';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent {
  @Output() eventEmit = new EventEmitter<void>();

  loading: boolean = false;

  report: FormGroup;

  user = localStorage.getItem('user');

  CAUSES = causes;

  file: string;

  minDate: Date;
  maxDate: Date;

  constructor(private reportService: ReportService, private fb: FormBuilder, private router: Router) {
    this.report = this.fb.group({
      nombreJefe: [ this.user, Validators.required ],
      nombreTrabajador: [ '', Validators.required ],
      lugar: [ '', Validators.required ],
      hora: [ '' ],
      testigos: [ '' ],
      equipos: [ '' ],
      relato: [ '' ],
      causas: this.fb.array([]),
      acuerdo: ['' ],
      probatorios: [ '' ],
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
    if (checked) {
      array.push(new FormControl(value));
    } else {
      array.removeAt((array.value as string[]).findIndex((element: string) => element === value));
    }
  }

  save() {
    this.loading = true;
    this.reportService.save(this.report.value, this.file)
    .then(() => {
      this.loading = false;
      Swal.fire({
        title: 'Se ha registrado la incidencia exitosamente',
        cancelButtonText: 'Ver',
        confirmButtonColor: '#009A3F',
      });
      this.router.navigate(['/main']);
    });
  }
  onFileSelected($event) {
    this.file = $event.target.files[0];
  }
}
