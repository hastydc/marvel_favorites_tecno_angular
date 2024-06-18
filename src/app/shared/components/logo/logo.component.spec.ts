import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
