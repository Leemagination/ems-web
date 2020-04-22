import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangeModalComponent } from './language-change-modal.component';

describe('LanguageChangeModalComponent', () => {
  let component: LanguageChangeModalComponent;
  let fixture: ComponentFixture<LanguageChangeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageChangeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
