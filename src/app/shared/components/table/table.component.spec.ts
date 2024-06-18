import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, TranslateModuleMock],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleFavorite', () => {
    const spy = spyOn(component.eventFavorite, 'emit').and.callThrough();
    component.toggleFavorite({ id: 1 } as any);

    expect(spy).toHaveBeenCalledWith({ id: 1 } as any);
  });

  it('toggleDetail', () => {
    component.actives = {
      1: false,
    };
    component.toggleDetail(1);

    expect(component.actives[1]).toEqual(true);
  });
});
