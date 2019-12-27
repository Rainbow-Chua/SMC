import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCompanyComponent } from './chart-company.component';

describe('ChartCompanyComponent', () => {
  let component: ChartCompanyComponent;
  let fixture: ComponentFixture<ChartCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
