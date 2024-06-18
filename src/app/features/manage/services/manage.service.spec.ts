import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { ManageService } from './manage.service';

describe('ManageService', () => {
  let service: ManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('signIn', fakeAsync(() => {
    const spy = spyOn(service, 'signIn').and.callThrough();

    const payload = { email: 'test@tes.com', password: '1234' };
    service.signIn(payload);

    tick(2000);
    flush();

    expect(spy).toHaveBeenCalledWith(payload);
  }));

  it('signUp', fakeAsync(() => {
    const spy = spyOn(service, 'signUp').and.callThrough();

    const payload = { email: 'test@tes.com', password: '1234' };
    service.signUp(payload);

    tick(2000);
    flush();

    expect(spy).toHaveBeenCalledWith(payload);
  }));
});
