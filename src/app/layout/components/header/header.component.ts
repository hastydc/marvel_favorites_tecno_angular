import { Component, OnDestroy, inject } from '@angular/core';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { MenuPanelComponent } from '../menu-panel/menu-panel.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from '@app/models/menuItem.interface';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { RoutePath } from '@app/models/routePath.enum';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
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
export class HeaderComponent implements OnDestroy {
  private readonly router = inject(Router);

  /** showMenu */
  public showMenu: boolean = false;

  public isSessionPage: boolean = false;

  private unsubscribe: Subject<void> = new Subject();

  /** menuItems */
  public menuItems: MenuItem[] = [
    { link: RoutePath.SIGN_IN, label: 'signIn' },
    { link: RoutePath.SING_UP, label: 'signUp' },
  ];

  constructor() {
    this.isSessionPage = this.router.url !== RoutePath.HOME;

    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
      if (!(event instanceof NavigationStart)) return;

      this.isSessionPage = event.url !== RoutePath.HOME;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * toggleMenu
   */
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
