import { Routes } from '@angular/router';

export const CommonRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'not-found',
        loadComponent: () =>
          import('./not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
      },
    ],
  },
];
