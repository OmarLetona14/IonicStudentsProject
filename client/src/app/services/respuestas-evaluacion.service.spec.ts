import { TestBed } from '@angular/core/testing';

import { RespuestasEvaluacionService } from './respuestas-evaluacion.service';

describe('RespuestasEvaluacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespuestasEvaluacionService = TestBed.get(RespuestasEvaluacionService);
    expect(service).toBeTruthy();
  });
});
