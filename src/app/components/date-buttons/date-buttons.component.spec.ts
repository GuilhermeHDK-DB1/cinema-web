import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateButtonsComponent } from './date-buttons.component';

describe('DateButtonsComponent', () => {
  let component: DateButtonsComponent;
  let fixture: ComponentFixture<DateButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateButtonsComponent]
    });
    fixture = TestBed.createComponent(DateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
