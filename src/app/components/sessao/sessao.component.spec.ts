import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoComponent } from './sessao.component';

describe('FilmesComponent', () => {
  let component: SessaoComponent;
  let fixture: ComponentFixture<SessaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaoComponent]
    });
    fixture = TestBed.createComponent(SessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
