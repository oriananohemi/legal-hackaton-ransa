import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SanctionsService } from 'src/app/core/services/sanctions/sanctions.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'codigo', 'nombreTrabajador', 'motivo', 'fechaIncidencia', 'estado', 'acciones'
  ];
  dataSource = new MatTableDataSource();

  selectedValue: string = '';
  valIncidence:string='';
  allSanctions: any = [];

  constructor(private sanctions$: SanctionsService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(): void {

    this.sanctions$.getAllSanctions().subscribe(sanctions => {
      this.allSanctions = sanctions;
      this.asignDataFb()
      this.onSelectStatus(this.selectedValue);
      this.onSelectIncidence(this.valIncidence);
    })

  }

  onSelectStatus(status) {
    this.asignDataFb()
    if (status !== '') {

      let approved = this.dataSource.data
        .filter((item: any) => item.estado.toLowerCase() === status);

      this.dataSource.data = approved;

      if (status == 'ninguno') {
        this.asignDataFb()
      }
    }
  }
  onSelectIncidence(incidence){
    this.asignDataFb()
    if (incidence !== '') {

      let incidenceItem = this.dataSource.data
        .filter((item: any) =>
          
          item.motivo.toLowerCase() === incidence);

      this.dataSource.data = incidenceItem ;

      if (incidence == 'ninguno') {
        this.asignDataFb()
      }
    }
    
  }

  asignDataFb() {
    return this.dataSource.data = this.allSanctions
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
