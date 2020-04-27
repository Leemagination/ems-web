import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTableComponent } from './complex-table.component';

describe('ComplexTableComponent', () => {
  let component: ComplexTableComponent;
  let fixture: ComponentFixture<ComplexTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
