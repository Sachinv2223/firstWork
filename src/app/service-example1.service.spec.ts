import { TestBed } from '@angular/core/testing';

import { ServiceExample1Service } from './service-example1.service';

describe('ServiceExample1Service', () => {
  let service: ServiceExample1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExample1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
