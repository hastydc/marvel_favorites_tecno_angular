import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Comic } from '@app/models/comic.interface';
import { ComicFilter } from '@app/models/comicFilter.enum';
import { Observable, of } from 'rxjs';

/**
 * ApiService
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /** http */
  private readonly http = inject(HttpClient);

  /**
   * getComics
   * @returns {Observable} response
   */
  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>('./assets/api/comics.mock.json');
  }

  /**
   * getComicsFiltered
   * @param {Comic[]} comics
   * @param {ComicFilter} comicFilter
   * @returns {Observable} response
   */
  getComicsFiltered(
    comics: Comic[],
    comicFilter: ComicFilter
  ): Observable<Comic[]> {
    if (comicFilter === ComicFilter.ALL) return of(comics);

    const response = comics.filter(({ isFavorite }: Comic) => isFavorite);

    return of(response);
  }

  /**
   * setFavorite
   * @param {Comic[]} comics
   * @param {number} sourceId
   * @param {boolean} value
   * @returns {Observable} response
   */
  setFavorite(
    comics: Comic[],
    sourceId: number,
    value: boolean = true
  ): Observable<Comic[]> {
    const response = comics;
    const findIndex = comics.findIndex(({ id }: Comic) => id === sourceId);

    response[findIndex].isFavorite = value;

    return of(comics);
  }
}
