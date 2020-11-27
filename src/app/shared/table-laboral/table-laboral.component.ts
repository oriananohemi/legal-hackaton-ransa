import { Component, OnInit } from '@angular/core';
import { SanctionsService } from 'src/app/core/services/sanctions/sanctions.service';

@Component({
  selector: 'app-table-laboral',
  templateUrl: './table-laboral.component.html',
  styleUrls: ['./table-laboral.component.scss']
})
export class TableLaboralComponent implements OnInit {
  allSanctions:any;

  constructor(
    private sanctions$: SanctionsService
  ) { }

  ngOnInit(): void {
    this.sanctions$.getAllSanctions().subscribe(sanctions =>{
      this.allSanctions = sanctions;
      console.log(this.allSanctions);
    })
  }

}
