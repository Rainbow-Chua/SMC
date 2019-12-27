import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectorComponent } from './search-sector.component';

describe('SearchSectorComponent', () => {
  let component: SearchSectorComponent;
  let fixture: ComponentFixture<SearchSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
