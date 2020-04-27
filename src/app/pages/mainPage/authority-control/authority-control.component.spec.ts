import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityControlComponent } from './authority-control.component';

describe('AuthorityControlComponent', () => {
  let component: AuthorityControlComponent;
  let fixture: ComponentFixture<AuthorityControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
