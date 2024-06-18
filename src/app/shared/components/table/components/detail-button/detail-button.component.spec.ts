import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailButtonComponent } from './detail-button.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';

describe('DetailButtonComponent', () => {
  let component: DetailButtonComponent;
  let fixture: ComponentFixture<DetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailButtonComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
