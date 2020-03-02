import { TestBed, async, inject } from '@angular/core/testing';

import { InboxGuard } from './inbox.guard';

describe('InboxGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboxGuard]
    });
  });

  it('should ...', inject([InboxGuard], (guard: InboxGuard) => {
    expect(guard).toBeTruthy();
  }));
});
