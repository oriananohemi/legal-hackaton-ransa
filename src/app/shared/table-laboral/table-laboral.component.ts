import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { SanctionsService } from 'src/app/core/services/sanctions/sanctions.service';
// import { BackgroundService } from 'src/app/core/services/background/background.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-laboral',
  templateUrl: './table-laboral.component.html',
  styleUrls: ['./table-laboral.component.scss']
})
export class TableLaboralComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo','nombreTrabajador','motivo','diasHombrePerdidos','fechaIncidencia','estado','acciones'
  ];
  dataSource = new MatTableDataSource();

  selectedValue: string = '';
 
  constructor(private sanctions$: SanctionsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(): void {
    this.sanctions$.getAllSanctions().subscribe(sanctions => {
      this.dataSource.data = sanctions;
    })

    this.onSelectStatus();
  }

  onSelectStatus() {
    if (this.selectedValue !== '') {
      console.log(this.selectedValue);

    }

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
