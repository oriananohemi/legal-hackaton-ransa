import { Component, EventEmitter, Output } from '@angular/core';
import { CheckService } from 'src/app/core/services/check/check.service';
import { incidences } from '../../../core/definitions/report.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { message } from 'src/app/core/services/check/check.constant';

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

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private checkService: CheckService, private snackBar: MatSnackBar) { }

    getQuestionsFromIncidence(selected) {
      this.questions = this.checkService.getQuestionsFromIncidence(selected);
      this.currentQuestion = 0;
      this.show = true;
    }

    getNextQuestion(value: boolean, i: number) {
      if (i === this.questions.length - 1) {
        this.eventEmit.emit();
      }
      this.currentQuestion = i + 1;
      if (!value) {
        this.snackBar.open(message, 'Entendido', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }

}
