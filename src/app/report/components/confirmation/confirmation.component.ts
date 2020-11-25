import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core/services/report-service/report.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  generatePdf() {
    this.reportService.generatePdf('print');
  }
}
