import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './card.service';

describe('Manserv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
