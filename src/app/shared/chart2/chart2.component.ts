import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import {FirestoreService} from '../../core/services/firestore/firestore.service'
import { Observable} from 'rxjs'
import {Data} from '../../core/definitions/data.model'

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {

  data$: Observable<Data[]>;

  // PolarArea
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;
  public polarChartColors = [
    {
      backgroundColor: ['rgb(0, 154, 63)', 'rgb(243, 146, 0)','rgb(20, 218, 69)', 'rgb(241, 149, 74)'],
    },
  ];

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(
    private fs: FirestoreService,
  ) { }

  ngOnInit() {
    this.data$ = this.fs.getData();
    this.data$.subscribe(data => {
      const state = data.map(d => d.estado)
      const stateSet = [...new Set(state)]
      this.polarAreaChartLabels = stateSet
      // console.log(stateSet);
      stateSet.forEach(sta => {
        this.polarAreaChartData.push(state.filter(s => s === sta).length)
      })
    })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
