import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { SanctionsService } from 'src/app/core/services/sanctions/sanctions.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})



export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'codigo',
    'estado',
    'motivo',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  allSanctions: any;
  showEdit: boolean;
  borradorState: any = [];
  constructor(private sanctions$: SanctionsService) { }

  ngOnInit(): void {
    this.sanctions$.getAllSanctions().subscribe(sanctions => {
     /// this.allSanctions = sanctions;
      this.dataSource.data=sanctions;
      console.log(sanctions);

      // for (let state of this.allSanctions) {
      //   console.log(state.estado);

      //   if (state.estado === "borrador") {
      //     this.borradorState.push(state.id);

      //   }
      // }
    })
  }
}
