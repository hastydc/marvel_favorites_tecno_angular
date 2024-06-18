import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { of, throwError } from 'rxjs';
import { ManageService } from '../services/manage.service';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(Router).navigate = jasmine
      .createSpy()
      .and.returnValue(of(true));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('signUp', () => {
    TestBed.inject(ManageService).signIn = jasmine
      .createSpy()
      .and.returnValue(of(true));
    const payload = { email: 'test@test.com', password: '1234' };

    component.signUp(payload);

    expect(component.loading).toBeFalse();
  });

  it('signUp error', () => {
    TestBed.inject(ManageService).signIn = jasmine
      .createSpy()
      .and.returnValue(throwError(() => ''));
    const payload = { email: 'test@test.com', password: '1234' };

    component.signUp(payload);

    expect(component.loading).toBeFalse();
  });
});
