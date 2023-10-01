import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmBreveComponent } from './em-breve.component';

describe('EmBreveComponent', () => {
  let component: EmBreveComponent;
  let fixture: ComponentFixture<EmBreveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmBreveComponent]
    });
    fixture = TestBed.createComponent(EmBreveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
