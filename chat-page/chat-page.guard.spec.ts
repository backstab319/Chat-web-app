import { TestBed, async, inject } from '@angular/core/testing';

import { ChatPageGuard } from './chat-page.guard';

describe('ChatPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatPageGuard]
    });
  });

  it('should ...', inject([ChatPageGuard], (guard: ChatPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
