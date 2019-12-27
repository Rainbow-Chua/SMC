import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExchangeComponent } from './search-exchange.component';

describe('SearchExchangeComponent', () => {
  let component: SearchExchangeComponent;
  let fixture: ComponentFixture<SearchExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
