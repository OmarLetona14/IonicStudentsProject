import { TestBed } from '@angular/core/testing';

import { EvaluacionesAlumnoService } from './evaluaciones-alumno.service';

describe('EvaluacionesAlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluacionesAlumnoService = TestBed.get(EvaluacionesAlumnoService);
    expect(service).toBeTruthy();
  });
});
