import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * ButtonComponent
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /** label */
  @Input() label: string = '';

  /** mask */
  @Input() mask: boolean = false;

  /** primary */
  @Input() primary: boolean = true;

  /** disabled */
  @Input() disabled: boolean = false;

  /** loading */
  @Input() loading: boolean = false;

  /** actionEvent */
  @Output() actionEvent: EventEmitter<void> = new EventEmitter<void>();

  /** size */
  size: 'small' | 'big' = 'small';

  /**
   * action
   */
  action(): void {
    if (this.disabled) return;

    this.actionEvent.emit();
  }
}
