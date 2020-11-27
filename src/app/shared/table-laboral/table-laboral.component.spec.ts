import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLaboralComponent } from './table-laboral.component';

describe('TableLaboralComponent', () => {
  let component: TableLaboralComponent;
  let fixture: ComponentFixture<TableLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
