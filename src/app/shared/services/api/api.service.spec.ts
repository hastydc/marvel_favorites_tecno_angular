import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ComicFilter } from '@app/models/comicFilter.enum';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getComicsFiltered', () => {
    const response = service.getComicsFiltered(
      [{ id: 1, isFavorite: true } as any],
      ComicFilter.FAVORITES
    );

    response.subscribe((response) => {
      expect(response.length).toEqual(1);
    });
  });

  it('setFavorite', () => {
    const response = service.setFavorite(
      [{ id: 1, isFavorite: true } as any],
      ComicFilter.FAVORITES
    );

    response.subscribe((response) => {
      expect(response.length).toEqual(1);
    });
  });
});
