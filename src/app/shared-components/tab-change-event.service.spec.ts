import { TestBed } from '@angular/core/testing';

import { TabChangeEventService } from './tab-change-event.service';

describe('TabChangeEventService', () => {
  let service: TabChangeEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabChangeEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
