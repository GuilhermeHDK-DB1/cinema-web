import { TestBed } from '@angular/core/testing';

import { ProgramacaoServiceService } from './programacao-service.service';

describe('ProgramacaoServiceService', () => {
  let service: ProgramacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
