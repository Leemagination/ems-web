import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverModalComponent } from './deliver-modal.component';

describe('DeliverModalComponent', () => {
  let component: DeliverModalComponent;
  let fixture: ComponentFixture<DeliverModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
