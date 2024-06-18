import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '@app/models/theme.enum';
import { TranslateModule } from '@ngx-translate/core';

/**
 * ThemeSwitcherComponent
 */
@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  /** isDark */
  isDark: boolean = false;

  /**
   * toggleTheme
   */
  toggleTheme(): void {
    this.isDark = !this.isDark;

    document.body.setAttribute(
      'data-theme',
      this.isDark ? Theme.DARK : Theme.LIGHT
    );
  }
}
