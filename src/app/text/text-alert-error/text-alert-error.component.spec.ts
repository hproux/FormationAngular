import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlertErrorComponent } from './text-alert-error.component';

describe('TextAlertErrorComponent', () => {
  let component: TextAlertErrorComponent;
  let fixture: ComponentFixture<TextAlertErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAlertErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlertErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
