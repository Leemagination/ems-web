import { TestBed } from '@angular/core/testing';

import { DropDownDataSourceService } from './drop-down-data-source.service';

describe('DropDownDataSourceService', () => {
  let service: DropDownDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDownDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
