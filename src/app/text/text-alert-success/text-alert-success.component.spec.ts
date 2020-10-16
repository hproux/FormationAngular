import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlertSuccessComponent } from './text-alert-success.component';

describe('TextAlertSuccessComponent', () => {
  let component: TextAlertSuccessComponent;
  let fixture: ComponentFixture<TextAlertSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAlertSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlertSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
