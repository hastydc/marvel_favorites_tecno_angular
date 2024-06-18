import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponent, TranslateModuleMock],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
