import { Component, OnInit } from '@angular/core';
import { Sanction } from "../../model/employed";
import { SanctionsService } from "../../services/sanctions.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

allSanctions:any;

  constructor(private sanctions$: SanctionsService) { }

  ngOnInit(): void {
    this.sanctions$.getAllSanctions().subscribe(sanctions =>{
      this.allSanctions = sanctions;
      console.log(this.allSanctions);
      
    })
  }

}
