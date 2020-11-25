import { Component, OnInit } from '@angular/core';
import { CheckService } from 'src/app/core/services/check/check.service';
import { incidences } from '../../../core/definitions/report.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
    selected: string;
    INCIDENCES = incidences;
    incidences = Object.keys(incidences);

    constructor(private checkService: CheckService) { }

    getQuestionsFromIncidence(selected) {
      console.log(selected)
      // this.checkService.getQuestionsFromIncidence(this.selected)
    }

  ngOnInit(): void {
  }

}
