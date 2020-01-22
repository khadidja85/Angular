import { TestBed } from '@angular/core/testing';

import { InscriptionMaitreService } from './inscription-maitre.service';

describe('InscriptionMaitreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscriptionMaitreService = TestBed.get(InscriptionMaitreService);
    expect(service).toBeTruthy();
  });
});
