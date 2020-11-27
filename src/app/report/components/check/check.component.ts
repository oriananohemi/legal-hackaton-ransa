import { Component, EventEmitter, Output } from '@angular/core';
import { CheckService } from 'src/app/core/services/check/check.service';
import { incidences } from '../../../core/definitions/report.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { message } from 'src/app/core/services/check/check.constant';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent {
  @Output() eventEmit = new EventEmitter<void>();

    currentQuestion: number = 0;
    show = false;
    questions: string[];
    INCIDENCES = incidences;
    incidences = Object.keys(incidences);

    answer: FormControl;

    constructor(private checkService: CheckService, private snackBar: MatSnackBar) { }

    getQuestionsFromIncidence(selected) {
      this.questions = this.checkService.getQuestionsFromIncidence(selected);
      this.currentQuestion = 0;
      this.show = true;
    }

    getNextQuestion(value: boolean, i: number) {
      this.currentQuestion = i + 1;
      if (!value) {
        Swal.fire({
          html:
          '<p>Recuerda que sin la acreditación de la infracción, no se puede sancionar. Continúa el proceso y tu gestor de GH te contactará.</p>',
          confirmButtonColor: '#009A3F',
          confirmButtonText: 'Entendido'
        });
      }
    }

    goNext() {
      this.eventEmit.emit();
    }
}
