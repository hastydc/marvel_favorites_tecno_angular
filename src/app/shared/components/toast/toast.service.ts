import { Injectable, signal } from '@angular/core';
import { Toast } from '@app/models/toast.interface';

/**
 * ToastService
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  /** show */
  private show = signal<Toast>({ show: false });

  /**
   * setData
   * @param {Toast} value
   */
  setData(value: Toast): void {
    this.show.update(() => value);
  }

  /**
   * getData
   * @returns {Toast} response
   */
  getData(): Toast {
    return this.show();
  }
}
