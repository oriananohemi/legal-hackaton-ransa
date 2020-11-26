import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {FirestoreService} from '../core/services/firestore/firestore.service'
import { Observable} from 'rxjs'
import {Data} from '../core/definitions/data.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  data$: Observable<Data[]>;

 // Pie
 public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [];
public pieChartData: SingleDataSet = [];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
public pieChartColors = [
  {
    backgroundColor: ['rgb(40, 158, 89)', 'rgb(190, 118, 10)', 'rgb(48, 139, 86)', 'rgb(0, 154, 63)', 'rgb(243, 146, 0)', 'rgb(241, 174, 74)', 'rgb(20, 218, 69)', 'rgb(241, 149, 74)'],
  },
];

constructor(
  private fs: FirestoreService,
) {
  monkeyPatchChartJsTooltip();
  monkeyPatchChartJsLegend();
}

  ngOnInit(){
    this.data$ = this.fs.getData();
    this.data$.subscribe(data => {
      const motives = data.map(d => d.motivo)
      const motivesSet = [...new Set(motives)]
      this.pieChartLabels = motivesSet
      motivesSet.forEach(motive => {
        this.pieChartData.push(motives.filter(m => m=== motive).length)
      })
    })
  }
}
