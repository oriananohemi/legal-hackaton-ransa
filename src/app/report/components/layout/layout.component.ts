import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentTab = 0;
  constructor(private readonly cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  changeTab() {
    this.currentTab++;
    this.cd.detectChanges()
  }

}
