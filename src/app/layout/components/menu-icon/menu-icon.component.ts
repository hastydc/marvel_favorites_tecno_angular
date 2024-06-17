import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.scss',
})
export class MenuIconComponent {
  /** active */
  @Input() active: boolean = false;

  /** actionToggleMenu */
  @Output() actionToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  /**
   * toggleMenu
   */
  toggleMenu(): void {
    this.actionToggleMenu.emit();
  }
}
