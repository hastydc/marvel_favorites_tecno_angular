import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * DetailButton
 */
@Component({
  selector: 'app-detail-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './detail-button.component.html',
  styleUrl: './detail-button.component.scss',
})
export class DetailButtonComponent {
  /** active */
  @Input() active: boolean = false;

  /** iconOpen */
  @Input() iconOpen: string = '';

  /** iconClose */
  @Input() iconClose: string = '';
}
