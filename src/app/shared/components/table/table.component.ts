import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '@app/models/comic.interface';
import { TranslateModule } from '@ngx-translate/core';
import { DetailComponent } from './detail/detail.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TranslateModule, DetailComponent, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Output() eventFavorite: EventEmitter<Comic> = new EventEmitter<Comic>();

  @Input() comics: Comic[] = [];

  toggleFavorite(comic: Comic): void {
    this.eventFavorite.emit(comic);
  }

  toggleDetail(id: number): void {}
}
