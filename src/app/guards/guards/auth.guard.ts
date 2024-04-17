import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService)
  const router = inject(Router)

  //return false;

  if (auth.logado) {
    //router.navigate(['/home']);
    return true;
  }

  return router.navigate(['/login']);
};
