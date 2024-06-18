import { Routes } from '@angular/router';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./sign-in/sign-in.component').then((c) => c.SignInComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
      },
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
    ],
  },
];
