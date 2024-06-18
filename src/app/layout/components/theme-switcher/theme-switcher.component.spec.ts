import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherComponent } from './theme-switcher.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
