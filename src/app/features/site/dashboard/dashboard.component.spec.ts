import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/shared/services/api/api.service';
import { of, throwError } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, HttpClientModule, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleFavorite', () => {
    TestBed.inject(ApiService).setFavorite = jasmine
      .createSpy()
      .and.returnValue(of([{ id: 1, isFavorite: true }]));

    component.toggleFavorite({ id: 1, isFavorite: false } as any);

    expect(component.baseComics.length).toEqual(1);
  });

  it('toggleFavorite Remove', () => {
    TestBed.inject(ApiService).setFavorite = jasmine
      .createSpy()
      .and.returnValue(of([{ id: 1, isFavorite: false }]));

    component.toggleFavorite({ id: 1, isFavorite: true } as any);

    expect(component.baseComics.length).toEqual(1);
  });

  it('getComics error', () => {
    TestBed.inject(ApiService).getComics = jasmine
      .createSpy()
      .and.returnValue(throwError(() => ''));

    component.getComics();

    expect(component.baseComics).toEqual([]);
  });
});
