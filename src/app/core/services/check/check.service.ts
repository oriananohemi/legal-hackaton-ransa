import { Injectable } from '@angular/core';
import { incidences } from './check.constant';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  getQuestionsFromIncidence(option: string): string[] {
    return incidences.find((incidence) => {
      return incidence.typeOfIncident === option;
    }).questions;
  }
}
