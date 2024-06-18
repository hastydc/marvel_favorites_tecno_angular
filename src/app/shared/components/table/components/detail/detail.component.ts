import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Comic } from '@app/models/comic.interface';
import { TranslateModule } from '@ngx-translate/core';

/**
 * DetailComponent
 */
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [TranslateModule, DatePipe, CurrencyPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  /** comic */
  @Input() comic!: Comic;
}
