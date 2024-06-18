import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutComponent } from './sign-out.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { StorageKey } from '@app/models/storageKey.enum';

describe('SignOutComponent', () => {
  let component: SignOutComponent;
  let fixture: ComponentFixture<SignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOutComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('signOut', () => {
    TestBed.inject(Router).navigate = jasmine
      .createSpy()
      .and.returnValue(of(true));
    component.signOut();

    expect(localStorage.getItem(StorageKey.AUTH)).toBeNull();
  });
});
