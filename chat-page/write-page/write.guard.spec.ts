import { TestBed, async, inject } from '@angular/core/testing';

import { WriteGuard } from './write.guard';

describe('WriteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WriteGuard]
    });
  });

  it('should ...', inject([WriteGuard], (guard: WriteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
