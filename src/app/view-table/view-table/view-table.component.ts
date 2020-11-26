import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {
  grafico = 'assets/img/Group 222.png'
  constructor() { }

  ngOnInit(): void {
  }

}
