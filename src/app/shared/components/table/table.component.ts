import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '@app/models/comic.interface';
import { TranslateModule } from '@ngx-translate/core';
import { DetailComponent } from './components/detail/detail.component';
import { DetailButtonComponent } from './components/detail-button/detail-button.component';
import { NgClass } from '@angular/common';

/**
 * TableComponent
 */
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TranslateModule, DetailComponent, DetailButtonComponent, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  /** eventFavorite */
  @Output() eventFavorite: EventEmitter<Comic> = new EventEmitter<Comic>();

  /** comics */
  @Input() comics: Comic[] = [];

  /** actives */
  actives: { [key: string]: boolean } = {};

  /**
   * toggleFavorite
   * @param {Comic} comic
   */
  toggleFavorite(comic: Comic): void {
    this.eventFavorite.emit(comic);
  }

  /**
   * toggleDetail
   * @param {number} id
   */
  toggleDetail(id: number): void {
    this.actives = {
      ...this.actives,
      [id.toString()]: !this.actives[id],
    };
  }
}
