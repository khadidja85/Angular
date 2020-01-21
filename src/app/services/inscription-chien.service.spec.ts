import { TestBed } from '@angular/core/testing';

import { InscriptionChienService } from './inscription-chien.service';

describe('InscriptionChienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscriptionChienService = TestBed.get(InscriptionChienService);
    expect(service).toBeTruthy();
  });
});
