import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'manage',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/manage/manage.routes').then((r) => r.ManageRoutes),
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
    redirectTo: '/manage/sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/common/not-found',
    pathMatch: 'full',
  },
];
