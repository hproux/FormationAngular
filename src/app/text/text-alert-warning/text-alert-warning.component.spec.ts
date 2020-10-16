import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlertWarningComponent } from './text-alert-warning.component';

describe('TextAlertWarningComponent', () => {
  let component: TextAlertWarningComponent;
  let fixture: ComponentFixture<TextAlertWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAlertWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlertWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
