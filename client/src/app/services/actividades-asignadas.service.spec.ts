import { TestBed } from '@angular/core/testing';

import { ActividadesAsignadasService } from './actividades-asignadas.service';

describe('ActividadesAsignadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadesAsignadasService = TestBed.get(ActividadesAsignadasService);
    expect(service).toBeTruthy();
  });
});
