import { TestBed } from '@angular/core/testing';

import { Lesson07servService } from './lesson07serv.service';

describe('Lesson07servService', () => {
  let service: Lesson07servService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lesson07servService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
