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

    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private checkService: CheckService, private _snackBar: MatSnackBar) { }

    getQuestionsFromIncidence(selected) {
      this.questions = this.checkService.getQuestionsFromIncidence(selected);
      this.currentQuestion = 0;
      this.show = true;
    }

    getNextQuestion(value: boolean, i: number) {
      if (i === this.questions.length - 1) {
        this.eventEmit.emit();
      }
      if (value) {
        this.currentQuestion = i + 1;
      } else {
        this.currentQuestion = i;
        this._snackBar.open(message, 'End now', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }

}
