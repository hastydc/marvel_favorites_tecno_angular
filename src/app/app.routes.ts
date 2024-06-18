import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'session',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/session/session.routes').then((r) => r.SessionRoutes),
  },
  {
    path: 'site',
    component: LayoutComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/site/site.routes').then((r) => r.SiteRoutes),
  },

  {
    path: 'common',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/common/common.routes').then((r) => r.CommonRoutes),
  },
  {
    path: '',
    redirectTo: '/session/sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/common/not-found',
    pathMatch: 'full',
  },
];
