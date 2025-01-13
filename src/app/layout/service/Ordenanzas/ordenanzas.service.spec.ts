import { TestBed } from '@angular/core/testing';

import { OrdenanzasService } from './ordenanzas.service';

describe('OrdenanzasService', () => {
  let service: OrdenanzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenanzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});