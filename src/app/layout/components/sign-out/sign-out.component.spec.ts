import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutComponent } from './sign-out.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';

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
});
