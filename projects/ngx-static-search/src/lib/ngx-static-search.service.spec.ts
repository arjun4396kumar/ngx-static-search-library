import { TestBed } from '@angular/core/testing';

import { NgxStaticSearchService } from './ngx-static-search.service';

describe('NgxStaticSearchService', () => {
  let service: NgxStaticSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStaticSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
