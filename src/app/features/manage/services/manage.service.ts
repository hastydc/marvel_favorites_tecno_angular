import { Injectable } from '@angular/core';
import { UserData } from '@app/models/sessionForm.interface';
import { StorageKey } from '@app/models/storageKey.enum';
import { Observable, delay, of, throwError } from 'rxjs';

/**
 * ManageService
 */
@Injectable({
  providedIn: 'root',
})
export class ManageService {
  /**
   * signIn
   * @param {UserData} payload
   * @returns {Observable} response
   */
  signIn(payload: UserData): Observable<boolean> {
    //return throwError(() => new Error('error'));
    localStorage.setItem(StorageKey.AUTH, 'true');
    return of(true).pipe(delay(1000));
  }

  /**
   * SignUp
   * @param {UserData} payload
   * @returns {Observable} response
   */
  signUp(payload: UserData): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }
}
