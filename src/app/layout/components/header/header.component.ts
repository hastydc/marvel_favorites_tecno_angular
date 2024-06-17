import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from '@app/models/menuItem.interface';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { RoutePath } from '@app/models/routePath.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BackButtonComponent,
    MenuIconComponent,
    MenuPanelComponent,
    ThemeSwitcherComponent,
    TranslateModule,
    RouterModule,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /** showMenu */
  public showMenu: boolean = false;

  /** menuItems */
  public menuItems: MenuItem[] = [
    { link: RoutePath.HOME, label: 'home' },
    { link: RoutePath.SIGN_IN, label: 'signIn' },
    { link: RoutePath.SING_UP, label: 'signUp' },
    { link: RoutePath.CREATE, label: 'create' },
  ];

  /**
   * toggleMenu
   */
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
