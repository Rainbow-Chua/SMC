import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorManageComponent } from './sector-manage.component';

describe('SectorManageComponent', () => {
  let component: SectorManageComponent;
  let fixture: ComponentFixture<SectorManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
