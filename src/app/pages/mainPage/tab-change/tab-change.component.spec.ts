import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChangeComponent } from './tab-change.component';

describe('TabChangeComponent', () => {
  let component: TabChangeComponent;
  let fixture: ComponentFixture<TabChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
