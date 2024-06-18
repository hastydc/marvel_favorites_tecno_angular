import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ManageService } from '../services/manage.service';
import { of, throwError } from 'rxjs';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Router).navigate = jasmine
      .createSpy()
      .and.returnValue(of(true));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('signIn', () => {
    TestBed.inject(ManageService).signIn = jasmine
      .createSpy()
      .and.returnValue(of(true));
    const payload = { email: 'test@test.com', password: '1234' };

    component.signIn(payload);

    expect(component.loading).toBeFalse();
  });

  it('signIn error', () => {
    TestBed.inject(ManageService).signIn = jasmine
      .createSpy()
      .and.returnValue(throwError(() => ''));
    const payload = { email: 'test@test.com', password: '1234' };

    component.signIn(payload);

    expect(component.loading).toBeFalse();
  });
});
