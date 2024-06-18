import { Component, EventEmitter, Output } from '@angular/core';
import { ComicFilter } from '@app/models/comicFilter.enum';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, TranslateModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  @Output() eventFilter: EventEmitter<ComicFilter> =
    new EventEmitter<ComicFilter>();

  comicFilter: ComicFilter = ComicFilter.ALL;
  comicFilterEnum = ComicFilter;

  filter(value: ComicFilter): void {
    this.comicFilter = value;
    this.eventFilter.emit(this.comicFilter);
  }
}
