import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@app/models/menuItem.interface';
import { TranslateModule } from '@ngx-translate/core';

/**
 * MenuPanelComponent
 */
@Component({
  selector: 'app-menu-panel',
  standalone: true,
  imports: [NgClass, RouterModule, TranslateModule],
  templateUrl: './menu-panel.component.html',
  styleUrl: './menu-panel.component.scss',
})
export class MenuPanelComponent {
  /** active */
  @Input() active: boolean = true;

  /** menuItems */
  @Input() menuItems: MenuItem[] = [];

  /** actionToggleMenu */
  @Output() actionToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  /**
   * toggleMenu
   */
  toggleMenu(): void {
    this.actionToggleMenu.emit();
  }
}
