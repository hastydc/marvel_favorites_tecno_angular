import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { authGuard } from './auth.guard';
import { of } from 'rxjs';
import { StorageKey } from '@app/models/storageKey.enum';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.setItem(StorageKey.AUTH, 'true');
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('authGuard', () => {
    const response = executeGuard({ url: [{ path: '' }] } as any, {} as any);

    expect(response).toBeTrue();
  });

  it('authGuard navigate', () => {
    TestBed.inject(Router).navigate = jasmine
      .createSpy()
      .and.returnValue(of(true));
    const response = executeGuard(
      { url: [{ path: 'site' }] } as any,
      {} as any
    );

    expect(response).toBeTrue();
  });

  it('authGuard navigate', () => {
    localStorage.removeItem(StorageKey.AUTH);
    TestBed.inject(Router).navigate = jasmine
      .createSpy()
      .and.returnValue(of(true));
    const response = executeGuard(
      { url: [{ path: 'site' }] } as any,
      {} as any
    );

    expect(response).toBeDefined();
  });
});
