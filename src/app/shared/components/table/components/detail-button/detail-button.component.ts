import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './detail-button.component.html',
  styleUrl: './detail-button.component.scss',
})
export class DetailButtonComponent {
  @Input() active: boolean = false;

  @Input() iconOpen: string = '';

  @Input() iconClose: string = '';
}
