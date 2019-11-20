import { TestBed } from '@angular/core/testing';

import { RespuestaPreguntaService } from './respuesta-pregunta.service';

describe('RespuestaPreguntaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespuestaPreguntaService = TestBed.get(RespuestaPreguntaService);
    expect(service).toBeTruthy();
  });
});
