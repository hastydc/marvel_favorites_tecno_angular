import { Component, Input } from '@angular/core';
import { Comic } from '@app/models/comic.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() comics: Comic[] = [];
}
