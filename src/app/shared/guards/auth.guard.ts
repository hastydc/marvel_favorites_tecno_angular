import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutePath } from '@app/models/routePath.enum';
import { StorageKey } from '@app/models/storageKey.enum';

/**
 * authGuard
 * @param {Object} route
 * @returns {Boolean | Observable} response
 */
export const authGuard: CanActivateFn = (route) => {
  if (`/${route.url[0].path}` !== RoutePath.HOME) return true;

  const isAuth =
    `${localStorage.getItem(StorageKey.AUTH) ?? 'false'}` === 'true';
  const router = inject(Router);

  if (!isAuth) return router.navigate([RoutePath.SIGN_IN]);

  return true;
};
