import { TestBed, async, inject } from '@angular/core/testing';

import { ProductAddGuard } from './product-add.guard';

describe('ProductAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductAddGuard]
    });
  });

  it('should ...', inject([ProductAddGuard], (guard: ProductAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
